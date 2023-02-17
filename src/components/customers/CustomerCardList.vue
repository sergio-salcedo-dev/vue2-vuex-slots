<template>
  <ul class="list list-unstyled">
    <li v-for="item in list" :key="item.email">
      <slot name="list-item" :item="item">
        <div class="card">
          <img
            class="img-responsive"
            :src="item.picture.large"
            :alt="item.name.first + ' ' + item.name.last"
          />
          <div class="card-body">
            <slot name="firstName" :content="item.name.first"></slot>

            <slot name="lastName" :content="item.name.last"></slot>

            <slot
              name="fullName"
              :content="`${item.name.first} ${item.name.last}`"
            />

            <slot
              name="fullNameWithTitle"
              :content="`${item.name.title} ${item.name.first} ${item.name.last}`"
            />

            <slot name="item-info" :item="item"></slot>
          </div>
        </div>
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CustomerCardList",

  props: {
    list: Array,
    default: () => {},
  },
};
</script>

<style scoped>
.list {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.responsive {
  width: 100%;
}

.card {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
}

.card-body {
  padding: 1rem;
}
</style>
