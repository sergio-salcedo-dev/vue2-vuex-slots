<template>
  <AppLayout>
    <template #main>
      <h1 class="h1 text-center text-capitalize my-3">
        {{ allRoutes.ROUTE_DASHBOARD_INVOICES.nameDisplayed }}
      </h1>

      <section
        class="d-flex flex-column align-items-center justify-content-center"
      >
        DASHBOARD_INVOICES
      </section>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import { allRoutes } from "@/router/routes";
import destinations from "@/sourceData/travel/destinations";

export default {
  name: "DashboardInvoices",

  components: {
    AppLayout,
  },

  data: () => ({
    allRoutes,
    destinations,
  }),
};
</script>
