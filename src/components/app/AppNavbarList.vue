<template>
  <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li v-if="isLoggedIn" class="nav-item">
      <router-link
        class="nav-link"
        :to="{ name: allRoutes.ROUTE_DASHBOARD.name }"
      >
        {{ allRoutes.ROUTE_DASHBOARD.nameDisplayed }}
      </router-link>
    </li>
    <li v-else class="nav-item">
      <router-link class="nav-link" :to="{ name: allRoutes.ROUTE_LOGIN.name }">
        {{ allRoutes.ROUTE_LOGIN.nameDisplayed }}
      </router-link>
    </li>
    <AppNavbarListItem
      v-for="route in menuRoutes"
      :key="route.path"
      :route="route"
    />
    <AppNavbarDropdown></AppNavbarDropdown>
  </ul>
</template>

<script>
import AppNavbarDropdown from "@/components/app/AppNavbarDropdown";
import AppNavbarListItem from "@/components/app/AppNavbarListItem";
import { allRoutes, menuRoutes } from "@/router/routes";
import destinations from "@/sourceData/travel/destinations";

export default {
  name: "AppNavbarList",

  components: {
    AppNavbarDropdown,
    AppNavbarListItem,
  },

  data: () => ({
    menuRoutes,
    allRoutes,
    destinations,
  }),

  computed: {
    isLoggedIn() {
      return !!this.destinations.userAuthenticated;
    },
  },
};
</script>
