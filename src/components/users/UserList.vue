<template>
  <section class="d-grid justify-content-center">
    <slot name="title">
      <h2 class="h1">{{ routeUsers.nameDisplayed }}</h2>
    </slot>

    <ul class="list-group list-unstyled">
      <UserListItem v-for="user in users" :key="user.email" :user="user" />
    </ul>
  </section>
</template>

<script>
import UserListItem from "@/components/users/UserListItem";
import { allRoutes } from "@/router/routes";

export default {
  name: "UserList",

  components: {
    UserListItem,
  },

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    routeUsers: allRoutes.ROUTE_USERS,
  }),
};
</script>
