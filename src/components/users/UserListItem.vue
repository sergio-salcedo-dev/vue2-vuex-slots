<template>
  <li
    class="border rounded mb-2 p-1 d-flex flex-column justify-content-center align-items-center"
  >
    <img
      class="rounded-circle mb-1"
      width="48"
      height="48"
      :src="largePicture"
      :alt="fullName"
    />
    <p class="m-0">{{ firstName }}</p>
  </li>
</template>

<script>
export default {
  name: "UserListItem",

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    firstName() {
      return this.user.name.first;
    },

    lastName() {
      return this.user.name.last;
    },

    fullName() {
      return this.firstName + this.lastName;
    },

    largePicture() {
      return this.user.picture.large;
    },
  },
};
</script>
