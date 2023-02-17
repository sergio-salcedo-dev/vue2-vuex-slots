<template>
  <AppLayout>
    <template #main>
      <WorkerList>
        <template #title>
          <div class="d-flex align-items-center mb-2">
            <label class="d-block text-nowrap me-2">View by</label>
            <select
              v-model="selected"
              class="form-select"
              aria-label="workers-info-select"
            >
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </template>
        <template #worker-list="{ workers, deleteWorker: deleteEmployee }">
          <WorkerListItem
            v-for="worker in workers"
            :key="worker.email"
            :worker="worker"
          >
            <template #additional-info>
              <!--              <pre>{{ worker }}</pre>-->
              <WorkerAccordion :worker="worker">
                <template #button-content>More info</template>
                <template #accordion-content>
                  <p class="mb-1">Username: {{ worker.login.username }}</p>
                  <p class="mb-1">
                    Country: {{ worker.location.country }} ({{ worker.nat }})
                  </p>
                </template>
              </WorkerAccordion>
            </template>
            <template #actions>
              <AppButton :variant="danger" @click="deleteEmployee(worker)">
                Delete
              </AppButton>
            </template>
          </WorkerListItem>
        </template>
      </WorkerList>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import { ERROR_MESSAGE } from "@/utils/messages";
import { FAILED, IDLE, LOADING } from "@/utils/states";
import WorkerList from "@/components/workers/WorkerList";
import WorkerListItem from "@/components/workers/WorkerListItem";
import AppButton from "@/components/app/AppButton";
import { DANGER } from "@/utils/colors";
import WorkerAccordion from "@/components/workers/WorkerAccordion";
import { capitalize } from "@/utils/string-functions";

export default {
  name: "WorkersView",

  components: {
    AppLayout,
    WorkerList,
    WorkerListItem,
    AppButton,
    WorkerAccordion,
  },

  data: () => ({
    state: IDLE,
    loading: LOADING,
    failed: FAILED,
    error: ERROR_MESSAGE,
    danger: DANGER,
    selected: "first",
    options: [
      { value: "first", label: capitalize("first name") },
      { value: "last", label: capitalize("last name") },
      { value: "full", label: capitalize("full name") },
      { value: "fullWithTitle", label: capitalize("full name with title") },
    ],
  }),
};
</script>

<style scoped lang="scss">
.main {
  justify-content: space-evenly !important;
  align-items: baseline !important;
  flex-direction: row-reverse;
}
</style>
