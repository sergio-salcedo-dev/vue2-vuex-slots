<template>
  <AppButton :variant="variant" @click="goBack">Go back</AppButton>
</template>

<script>
import AppButton from "@/components/app/AppButton";
import ColorMixin from "@/utils/colors-mixins";

export default {
  name: "GoBackButton",

  components: {
    AppButton,
  },

  mixins: [ColorMixin],

  methods: {
    goBack() {
      // this.$router.back();
      this.$router.go(-1);
    },
  },
};
</script>
