<template>
  <section>
    <slot v-if="state === states.loaded" name="title">Customers</slot>
    <slot
      v-if="state === states.loaded"
      name="list"
      :count="customers.length"
      :list="customers"
      :deleteitem="deleteCustomer"
    >
      <ul class="customer-list list-unstyled">
        <li v-for="customer in customers" :key="customer.email">
          <slot name="list-item" :item="customer">
            <div>
              <img
                width="48"
                height="48"
                :src="customer.picture.large"
                :alt="customer.name.first + ' ' + customer.name.last"
              />
              <div>
                <div>{{ customer.name.first }}</div>
                <p class="h5">{{ functionPropTest(customer) }}</p>
                <slot name="item-info" :item="customer"></slot>
              </div>
            </div>
          </slot>
        </li>
      </ul>
    </slot>
    <slot v-else name="loading">
      <AppSpinnerVueSchool></AppSpinnerVueSchool>
    </slot>
    <slot v-if="state === states.failed" name="error">
      Oops, something went wrong.
    </slot>
  </section>
</template>

<script>
import { RANDOM_USER } from "@/api/users/routes";
import AppSpinnerVueSchool from "@/components/app/AppSpinnerVueSchool";

const states = {
  idle: "idle",
  loading: "loading",
  loaded: "loaded",
  failed: "failed",
};

export default {
  name: "CustomerList",

  components: {
    AppSpinnerVueSchool,
  },

  props: {
    functionPropTest: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      state: "idle",
      data: undefined,
      error: undefined,
      customers: undefined,
      states,
    };
  },

  watch: {
    data() {
      this.customers = this.data?.results;
    },
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      this.state = states.loading;
      this.error = undefined;
      this.data = undefined;

      try {
        setTimeout(async () => {
          const response = await fetch(RANDOM_USER);
          const json = await response.json();

          this.state = states.loaded;
          this.data = json;

          return response;
        }, 1000);
      } catch (error) {
        this.state = states.failed;
        this.error = error;

        return error;
      }
    },

    deleteCustomer(customer) {
      this.customers = this.customers.filter(
        // (customer) => customer.email !== theCustomer.email
        ({ email }) => email !== customer.email
      );
    },
  },
};
</script>

<style scoped>
.customer-list {
  margin: 10px;
}
.customer-list img {
  border-radius: 50%;
  margin-right: 1rem;
}

.customer-list li + li {
  margin-top: 10px;
}

.customer-list li > div {
  display: flex;
  align-items: center;
}

.customer-list li div div {
  flex: 1;
}
</style>
