<template>
  <AppLayout>
    <template #main>
      <section>
        <h1 class="h1 text-center my-4">{{ error404Route.nameDisplayed }}</h1>
        <div class="d-flex justify-content-evenly align-items-center">
          <GoBackButton :variant="allColors.SECONDARY" />
          <router-link
            :to="{ name: homeViewData.name }"
            class="text-decoration-none"
          >
            {{ homeViewData.name }}
          </router-link>
        </div>
      </section>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import GoBackButton from "@/components/travels/GoBackButton";
import { allRoutes } from "@/router/routes";
import { allColors } from "@/utils/colors";

export default {
  name: "AboutView",

  components: {
    AppLayout,
    GoBackButton,
  },

  data: () => ({
    homeViewData: allRoutes.ROUTE_HOME,
    error404Route: allRoutes.ROUTE_ERROR_404,
    allColors,
  }),
};
</script>
