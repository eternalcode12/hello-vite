<script lang="ts">
import { defineComponent } from "vue-demi";
import VHeaderVue from "./component/VHeader.vue";

export default defineComponent({
  components: {
    VHeaderVue,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <el-container>
    <el-header class="fixed top-0 w-full">
      <VHeaderVue />
    </el-header>
    <el-main>
      <div class="w-[1240px] mx-auto">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  padding: 0!important;
}
:deep(.el-main) {
  padding: 0!important;
  padding-top: 70px!important;
  padding-bottom: 30px!important;
}
</style>