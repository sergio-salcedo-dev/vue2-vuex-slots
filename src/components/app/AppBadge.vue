<template>
  <span class="badge" :class="className">
    <slot></slot>
  </span>
</template>

<script>
import ColorMixin from "@/utils/colors-mixins";

export default {
  name: "AppBadge",

  mixins: [ColorMixin],

  props: {
    isRounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      const variantClass = `bg-${this.variant}`;
      const roundedClass = "rounded-pill";

      return this.isRounded ? `${variantClass} ${roundedClass}` : variantClass;
    },
  },
};
</script>
