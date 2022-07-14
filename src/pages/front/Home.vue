<script lang="ts">
import { defineComponent } from "vue-demi";
import { useUserInfo } from "@/store/userinfo";

export default defineComponent({
  setup() {
    const store = useUserInfo();
    return {
      store
    }
  }
})
</script>

<template>
  {{ store.uid }}
</template>