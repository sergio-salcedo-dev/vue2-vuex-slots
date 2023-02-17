<template>
  <AppLayout>
    <template #main>
      <h1 class="h1 text-center text-capitalize my-3">
        {{ allRoutes.ROUTE_DASHBOARD.nameDisplayed }}
      </h1>

      <section
        class="d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="h2 d-flex justify-content-center mt-3 text-capitalize">
          Welcome {{ user }}
        </h2>
        <AppLogOutButton class="my-5" />
        <article class="border rounded mb-5 p-2 d-flex align-items-center">
          <header class="h2 me-4">Actions</header>
          <router-link
            class="btn btn-success btn-lg"
            :to="{ name: allRoutes.ROUTE_DASHBOARD_INVOICES.name }"
          >
            {{ allRoutes.ROUTE_DASHBOARD_INVOICES.nameDisplayed }}
          </router-link>
        </article>
      </section>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import { allRoutes } from "@/router/routes";
import destinations from "@/sourceData/travel/destinations";
import AppLogOutButton from "@/components/app/AppLogOutButton";

export default {
  name: "TheDashboard",

  components: {
    AppLayout,
    AppLogOutButton,
  },

  data: () => ({
    allRoutes,
    destinations,
  }),

  computed: {
    user() {
      return this.destinations.userAuthenticated;
    },
  },
};
</script>
