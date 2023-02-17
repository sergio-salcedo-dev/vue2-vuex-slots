<template>
  <section>
    <h3 :id="`#see-${experience.slug}`" class="h4 ms-4 pt-4">
      {{ experience.name }}
    </h3>
    <article
      class="experience-details d-flex justify-content-center align-items-center"
    >
      <figure>
        <img
          :src="image(experience)"
          :alt="experience.name"
          class="experience-details__img"
        />
      </figure>
      <p class="px-2">{{ experience.description }}</p>
    </article>
  </section>
</template>

<script>
import destinations from "@/sourceData/travel/destinations";

export default {
  name: "TheTravelExperienceDetails",

  props: {
    destinationSlug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    destinations: destinations.destinations,
  }),

  computed: {
    destination() {
      return this.destinations.find(
        (destination) => destination.slug === this.destinationSlug
      );
    },

    experiences() {
      return this.destination.experiences;
    },

    experience() {
      return this.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },

    image() {
      return (obj) => require(`@/assets/travels/images/${obj.image}`);
    },
  },
};
</script>

<style scoped>
.experience-details {
  background: #2c3e50;
  color: white;
  display: block;
  border-top: 2px solid #4e6c71;
  padding: 10px;
  margin-bottom: 0;
}

.experience-details__img {
  margin: 10px;
  border-radius: 5px;
}
</style>
