<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="{ name }">
      {{ nameDisplayed }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "AppNavbarListItem",

  props: {
    route: {
      type: Object,
      required: true,
    },
  },

  computed: {
    name() {
      return this.route.name;
    },

    nameDisplayed() {
      return this.route.nameDisplayed;
    },
  },
};
</script>
