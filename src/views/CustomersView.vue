<template>
  <AppLayout>
    <template #main>
      <AppButton @click="showCards = !showCards">
        {{ showCards ? "Simple view" : "View Cards" }}
      </AppButton>
      <CustomerList v-if="showCards">
        <template #title>
          <h2 class="h1">
            {{ routeCustomers.nameDisplayed }}
          </h2>
          <div class="d-flex align-items-center mb-2">
            <label class="d-block text-nowrap me-2">View</label>
            <select
              v-model="selectedOption"
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
        <template #list="{ list: customers }">
          <CustomerCardList :list="customers">
            <template #[selectedOption]="{ content }">
              <p class="h4">{{ content }}</p>
            </template>
          </CustomerCardList>
        </template>
      </CustomerList>
      <CustomerList v-else :function-prop-test="(customer) => customer.email" />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import CustomerList from "@/components/customers/CustomerList";
import { capitalize } from "@/utils/string-functions";
import { allRoutes } from "@/router/routes";
import CustomerCardList from "@/components/customers/CustomerCardList";
import AppButton from "@/components/app/AppButton";

export default {
  name: "WorkersView",

  components: {
    AppLayout,
    CustomerList,
    CustomerCardList,
    AppButton,
  },

  props: {
    functionPropTest: {
      type: Function,
      default: () => {},
    },
  },

  data: () => ({
    routeCustomers: allRoutes.ROUTE_CUSTOMERS,
    selectedOption: "firstName",
    options: [
      { value: "firstName", label: capitalize("first name") },
      { value: "lastName", label: capitalize("last name") },
      { value: "fullName", label: capitalize("full name") },
      { value: "fullNameWithTitle", label: capitalize("full name with title") },
    ],
    showCards: false,
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
