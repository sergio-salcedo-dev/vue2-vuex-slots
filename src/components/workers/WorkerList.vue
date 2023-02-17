<template>
  <section v-if="workers.length" class="d-grid">
    <slot name="title">
      <h2 class="h1">
        {{ workersViewData.nameDisplayed }}
      </h2>
    </slot>
    <ul class="list-group list-unstyled">
      <slot name="worker-list" :workers="workers" :delete-worker="deleteWorker">
        <li
          v-for="worker in workers"
          :key="email(worker)"
          class="border rounded mb-2 p-1 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            class="rounded-circle mb-1 img-responsive"
            width="48"
            height="48"
            :src="worker.picture.large"
            :alt="fullName(worker)"
          />
          <div>
            <p class="m-0">{{ worker.name.first }}</p>
          </div>
        </li>
      </slot>
    </ul>
  </section>
  <AppSpinnerVueSchool v-else></AppSpinnerVueSchool>
</template>

<script>
import { ERROR_MESSAGE } from "@/utils/messages";
import { ROUTE_WORKERS } from "@/router/routes";
import { RANDOM_USER } from "@/api/users/routes";
import AppSpinnerVueSchool from "@/components/app/AppSpinnerVueSchool";

export default {
  name: "WorkerList",

  components: {
    AppSpinnerVueSchool,
  },

  data: () => ({
    workers: [],
    error: ERROR_MESSAGE,
    workersViewData: ROUTE_WORKERS,
  }),

  computed: {
    fullName() {
      return (worker) => worker.name.first + worker.name.last;
    },

    email() {
      return (worker) => worker.email;
    },
  },

  created() {
    this.loadWorkers();
  },

  methods: {
    async loadWorkers() {
      try {
        setTimeout(async () => {
          const response = await fetch(RANDOM_USER);
          const json = await response.json();

          this.workers = json.results;

          return response;
        }, 1000);
      } catch (error) {
        return error;
      }
    },

    deleteWorker(employee) {
      this.workers = this.workers.filter(
        (worker) => worker.email !== employee.email
      );
    },
  },
};
</script>
