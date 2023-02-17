<template>
  <AppLayout>
    <template #main>
      <h1 class="h1 text-center my-4">
        {{ routeTravel.nameDisplayed }}
      </h1>
      <section
        class="destinations d-flex flex-wrap justify-content-evenly mb-4"
      >
        <article
          v-for="destination in destinations"
          :key="destination.slug"
          class="destination"
        >
          <p class="text-center">
            <router-link
              :to="{
                name: routeTravelDetails.name,
                params: { destinationSlug: destination.slug },
              }"
              class="text-decoration-none text-secondary mb-2 destination__link"
            >
              {{ destination.name }}
            </router-link>
          </p>
          <router-link
            :to="{
              name: routeTravelDetails.name,
              params: { destinationSlug: destination.slug },
            }"
            class="text-decoration-none text-secondary mb-2 destination__link"
          >
            <figure class="mx-2 text-center">
              <img
                :src="destinationImage(destination)"
                :alt="destination.name"
                class="img-thumbnail"
              />
            </figure>
          </router-link>
        </article>
      </section>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import destinations from "@/sourceData/travel/destinations";
import { allRoutes } from "@/router/routes";

export default {
  name: "TravelAppView",

  components: {
    AppLayout,
  },

  data: () => ({
    destinations: destinations.destinations,
    routeTravel: allRoutes.ROUTE_TRAVEL,
    routeTravelDetails: allRoutes.ROUTE_TRAVEL_DETAILS,
  }),

  computed: {
    destinationImage() {
      return (destination) =>
        require(`@/assets/travels/images/${destination.image}`);
    },
  },
};
</script>

<style scoped lang="scss">
.destination {
  max-width: 250px;
}

.destination__link:hover {
  color: #42d382 !important;
  border-bottom: 2px solid #42d382;
  padding-bottom: 4px;
}
</style>
