<template>
  <button class="btn" :class="`btn-${variant}`">
    <slot></slot>
  </button>
</template>

<script>
import ColorMixin from "@/utils/colors-mixins";

export default {
  name: "AppButton",

  mixins: [ColorMixin],
};
</script>
