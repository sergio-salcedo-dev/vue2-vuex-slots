<template>
  <nav class="navbar navbar-expand-md" :class="navbarClass">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: homeViewData.name }">
        {{ homeViewData.nameDisplayed }}
      </router-link>
      <AppNavbarToggler></AppNavbarToggler>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <AppNavbarList class="navbar-nav me-auto mb-2 mb-md-0"></AppNavbarList>
        <CartDropdown></CartDropdown>
        <div
          class="form-check form-switch align-items-center d-flex flex-column form-check form-switch justify-content-center"
        >
          <label
            class="form-check-label fs-8"
            :class="{ 'text-secondary': isDarkMode }"
            for="darkModeSwitcher"
          >
            Dark mode
          </label>
          <input
            id="darkModeSwitcher"
            :checked="isDarkMode"
            class="form-check-input mx-0"
            type="checkbox"
            @change="isDarkMode = !isDarkMode"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppNavbarToggler from "@/components/app/AppNavbarToggler";
import AppNavbarList from "@/components/app/AppNavbarList";
import { ROUTE_HOME } from "@/router/routes";
import CartDropdown from "@/components/shopping-cart/CartDropdown";

export default {
  name: "AppNavbar",

  components: {
    AppNavbarToggler,
    AppNavbarList,
    CartDropdown,
  },

  data: () => ({
    homeViewData: ROUTE_HOME,
    isDarkMode: false,
  }),

  computed: {
    navbarClass() {
      return this.isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light";
    },
  },
};
</script>
