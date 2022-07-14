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
  <VHeaderVue />
</template>
