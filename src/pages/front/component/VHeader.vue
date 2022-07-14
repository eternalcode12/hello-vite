<script lang="ts">
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  setup() {
    return {
      
    };
  },
});
</script>

<template>
  <header class="text-[#ffffff]">
    <div class="w-[1240px] flex mx-auto justify-between items-center py-[12px]">
      <div>left</div>
      <div class="w-[50px] flex justify-between">
        <VIcon class="cursor-pointer" :size="18" :name="'Sunny'" />
        <VIcon class="cursor-pointer" :size="18" :name="'MoonNight'" />
      </div>
    </div>
  </header>
</template>
