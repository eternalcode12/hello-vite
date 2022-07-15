<script lang="ts">
import { defineComponent, reactive, ref } from "vue-demi";
import { getArticleAll } from "@/api/public";
import { pagination } from "@/interface/pagination";

/**
 * interface article
 */
interface Article {
  id: number;
  uid: string;
  title: string;
  description: string;
  cover: string;
  content: string;
  length: number;
  assessNum: number;
  status: number;
  author: string;
  categories: Category[] | null;
  tags: Tag[] | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * define interface category
 */
interface Category {
  id: number;
  title: string;
  sort: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * define interface tag
 */
interface Tag {
  id: number;
  label: string;
  value: number;
  createdBy: string;
  disabled: number;
  createdAt: string;
  updatedAt: string;
}

export default defineComponent({
  setup() {
    const params = reactive<pagination>({
      currentNo: 1,
      pageSize: 5,
    });
    const articles = ref<Article[]>([]);
    // 获取文章列表
    const init = () => {
      getArticleAll(params)
        .then((res: any) => {
          articles.value = res.data.data;
        })
        .catch((err: any) => {
          console.log(err);
        });
    };

    init();
    return {
      articles,
    };
  },
});
</script>

<template>
  <div class="w-[55%]">
    <el-card
      v-for="(article, index) in articles"
      :key="index"
      class="mt-4 image-hover-status"
      :class="{ 'mt-[0]': index == 0 }"
    >
      <div class="flex">
        <div class="w-[250px] h-[158px] overflow-hidden rounded-[4px]">
          <img :src="article.cover" alt="" class="h-full w-full" />
        </div>
        <!-- 内容 -->
        <div class="ml-4 flex flex-col justify-between flex-1">
          <div>{{ article.title }}</div>
          <div>{{ article.description }}</div>
          <div class="flex">
            <div class="flex items-center">
              <el-icon :size="20">
                <Clock />
              </el-icon>
              <div class="ml-1">
                {{ article.createdAt }}
              </div>
            </div>
            <div class="flex items-center ml-4">
              <el-icon :size="20">
                <View />
              </el-icon>
              <div class="ml-1">
                {{ article.assessNum }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.image-hover-status {
  cursor: pointer;
}
img {
  transition: all 0.5s ease-in-out;
}
.image-hover-status:hover img {
  transform: scale(1.2);
}
</style>