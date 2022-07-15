<script lang="ts">
import { defineComponent, ref, reactive } from "vue-demi";
import { useDark, useToggle } from "@vueuse/core";
import { getCategoryAll } from "@/api/public";
import { useRouter } from "vue-router";
import { pagination } from '@/interface/pagination';

/**
 * interface category
 */
interface Category {
  id: number;
  title: string;
  sort: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    // 初始化主题颜色
    const themeText = ref("");
    // 主题色
    const isDark = useDark({
      onChanged(dark: boolean) {
        let html = document.getElementsByTagName("html")[0];
        if (dark) {
          html.classList.remove("dark");
        } else {
          html.classList.add("dark");
        }
        dark ? (themeText.value = "夜间模式") : (themeText.value = "默认模式");
      },
    });
    // 主题配色的修改方法
    const toggleDark = useToggle(isDark);
    const change = () => {
      toggleDark();
    };
    // 获取分类数据
    const categoryAll = ref<Category[]>([]);
    const params = reactive<pagination>({
      currentPage: 1,
      pageSize: 10,
    })

    // 获取类别列表
    const init = () => {
      getCategoryAll(params).then((res: any) => {
        categoryAll.value = res.data.data;
      });
    };

    // 跳转
    const togo = (url: string) => {
      router.push(url);
    };

    init();

    return {
      themeText,
      categoryAll,
      change,
      togo,
    };
  },
});
</script>

<template>
  <el-card>
    <div class="w-[1240px] flex mx-auto justify-between items-center py-[15px]">
      <div>
        <el-button link>Logo</el-button>
      </div>
      <div class="flex justify-between items-center">
        <el-button
          link
          v-for="(item, index) of categoryAll"
          @click="togo(item.url)"
          :key="index"
        >
          {{ item.title }}
        </el-button>
        <el-button link @click="change">{{ themeText }}</el-button>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 0;
}
</style>