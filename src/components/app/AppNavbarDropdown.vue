<template>
  <li class="nav-item dropdown d-flex align-items-baseline">
    <AppNavbarListItem :route="allRoutes.ROUTE_TRAVEL" />
    <a
      id="navbarDropdown"
      class="dropdown-toggle text-secondary"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    ></a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <router-link
        v-for="destination in destinations"
        :key="destination.slug"
        :to="{
          name: allRoutes.ROUTE_TRAVEL_DETAILS.name,
          params: { destinationSlug: destination.slug },
        }"
        class="dropdown-item"
      >
        {{ destination.name }}
      </router-link>
    </ul>
  </li>
</template>

<script>
import { allRoutes } from "@/router/routes";
import AppNavbarListItem from "@/components/app/AppNavbarListItem";
import destinations from "@/sourceData/travel/destinations";

export default {
  name: "AppNavbarDropdown",

  components: { AppNavbarListItem },

  data: () => ({
    destinations: destinations.destinations,
    allRoutes,
  }),
};
</script>
