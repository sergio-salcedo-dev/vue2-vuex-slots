<template>
  <div class="card mb-3" :class="{ 'worker-card': isDefaultStyle }">
    <div class="row g-0">
      <div class="col-md-3 p-3">
        <img
          :src="worker.picture.large"
          class="img-fluid rounded-start"
          :alt="fullName"
        />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h5 class="card-title">{{ fullName }}</h5>
          <p class="card-text">
            <a :href="`mailto:${worker.email}`" class="text-decoration-none">{{
              worker.email
            }}</a>
          </p>
          <slot name="additional-info"></slot>
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkerListItem",

  props: {
    worker: {
      type: Object,
      required: true,
    },
    isDefaultStyle: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    fullName() {
      return `${this.worker.name.first} ${this.worker.name.last}`;
    },
  },
};
</script>

<style scoped lang="scss">
.worker-card {
  max-width: 600px;
}
</style>
