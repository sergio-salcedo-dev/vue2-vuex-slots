<template>
  <AppButton @click="logOut">Log out</AppButton>
</template>

<script>
import AppButton from "@/components/app/AppButton";
import destinations from "@/sourceData/travel/destinations";
import { allRoutes } from "@/router/routes";

export default {
  name: "AppLogOutButton",

  components: {
    AppButton,
  },

  data: () => ({
    destinations,
  }),

  methods: {
    logOut() {
      this.destinations.userAuthenticated = null;
      this.$router.push({ name: allRoutes.ROUTE_HOME.name });
    },
  },
};
</script>

<style scoped></style>
