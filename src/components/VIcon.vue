<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    return {
      props
    };
  },
});
</script>

<template>
  <el-icon>
    <component v-bind="$attrs" :is="props.name"></component>
  </el-icon>
</template>
