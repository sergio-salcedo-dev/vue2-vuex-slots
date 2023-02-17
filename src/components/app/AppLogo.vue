<template>
  <img :src="logo" alt="app logo" width="30" height="30" @click="goHome" />
</template>

<script>
import VueLogo from "@/assets/app/logo.png";
import { ROUTE_HOME } from "@/router/routes";

export default {
  name: "AppLogo",

  data: () => ({
    logo: VueLogo,
    homeViewData: ROUTE_HOME,
  }),

  methods: {
    goHome() {
      this.$router.push({ name: this.homeViewData.name });
    },
  },
};
</script>
