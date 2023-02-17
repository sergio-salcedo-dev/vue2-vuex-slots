<template>
  <AppLayout>
    <template #main>
      <AppSpinner v-if="isState(loading)"></AppSpinner>
      <p v-else-if="isState(failed)">{{ error }}</p>
      <UserList v-else :users="users" />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import AppSpinner from "@/components/app/AppSpinner";
import UserList from "@/components/users/UserList";
import { ERROR_MESSAGE } from "@/utils/messages";
import { FAILED, IDLE, LOADED, LOADING } from "@/utils/states";
import { RANDOM_USER } from "@/api/users/routes";

export default {
  name: "UsersView",

  components: {
    AppLayout,
    UserList,
    AppSpinner,
  },

  data: () => ({
    state: IDLE,
    loading: LOADING,
    failed: FAILED,
    users: undefined,
    error: ERROR_MESSAGE,
  }),

  created() {
    this.loadUsers();
  },

  methods: {
    async loadUsers() {
      this.state = LOADING;

      try {
        setTimeout(async () => {
          const response = await fetch(RANDOM_USER);
          const json = await response.json();

          this.users = json.results;
          console.log(this.users);
          this.state = LOADED;
        }, 1000);
      } catch (error) {
        this.state = FAILED;
      }
    },

    /**
     * @param {string} state
     * @returns {boolean}
     */
    isState(state) {
      return this.state === state;
    },
  },
};
</script>
