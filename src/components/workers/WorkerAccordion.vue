<template>
  <div :id="`worker-accordion-${loginUuid}`" class="accordion mb-2">
    <div class="accordion-item">
      <h2 :id="`heading-${loginUuid}`" class="accordion-header">
        <button
          class="p-2 fs-7 accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${loginUuid}`"
          aria-expanded="false"
          :aria-controls="`collapse-${loginUuid}`"
        >
          <slot name="button-content">Additional info</slot>
          <!--          <slot>Additional info</slot>-->
        </button>
      </h2>
      <div
        :id="`collapse-${loginUuid}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`heading-${loginUuid}`"
        :data-bs-parent="`#worker-accordion-${loginUuid}`"
      >
        <div class="accordion-body">
          <slot name="accordion-content">Phone: {{ worker.phone }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkerAccordion",

  props: {
    worker: {
      type: Object,
      required: true,
    },
  },

  computed: {
    loginUuid() {
      return this.worker.login.uuid;
    },
  },
};
</script>
