<template>
  <AppLayout>
    <template #main>
      <h1 class="h1 text-center text-capitalize my-3">Login</h1>
      <form class="form mx-auto" @submit.prevent="login">
        <div class="form-floating mb-3">
          <input
            id="dashboard-login-username"
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Username"
          />
          <label for="dashboard-login-username">Username</label>
        </div>
        <div class="form-floating">
          <input
            id="dashboard-login-password"
            v-model="password"
            type="text"
            class="form-control"
            placeholder="Password"
          />
          <label for="dashboard-login-password">Password</label>
        </div>
        <AppButton class="mt-3 btn-lg w-100">Login</AppButton>
      </form>
    </template>
  </AppLayout>
</template>

<script>
import destinations from "@/sourceData/travel/destinations";
import AppButton from "@/components/app/AppButton";
import AppLayout from "@/layouts/app/AppLayout";
import { allRoutes } from "@/router/routes";

export default {
  name: "TheLogin",
  components: {
    AppLayout,
    AppButton,
  },

  data: () => ({
    allRoutes,
    username: null,
    password: null,
  }),

  methods: {
    login() {
      // Authenticate user against API
      destinations.userAuthenticated = this.username;
      if (destinations.userAuthenticated === this.username) {
        const redirectPath = this.$route.query.redirect || {
          name: allRoutes.ROUTE_DASHBOARD.name,
        };

        this.$router.push(redirectPath);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  max-width: 400px;
}
</style>
