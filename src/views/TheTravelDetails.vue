<template>
  <AppLayout>
    <template #main>
      <div class="d-flex justify-content-between align-items-baseline mx-5">
        <h1 class="h1 text-center my-4">
          {{ destination.name }}
        </h1>
        <GoBackButton :variant="allColors.SECONDARY" />
      </div>
      <section class="destination-details">
        <figure class="mx-2 text-center">
          <img
            :src="image(destination)"
            :alt="destination.name"
            class="destination-details__img img-responsive"
          />
        </figure>
        <div class="d-flex flex-column justify-content-between mx-3">
          <p>{{ destination.description }}</p>
          <AppButton class="mx-auto mb-3">Buy</AppButton>
        </div>
      </section>

      <!--      <section class="experiences mt-4" id="experiences">-->
      <section class="experiences mt-4">
        <h2 class="h2 text-center my-4">
          Top experiences in {{ destination.name }}
        </h2>
        <div id="experiences" class="experiences__cards mb-5">
          <article
            v-for="experience in experiences"
            :key="experience.slug"
            class="experience-card"
          >
            <router-link
              :to="{
                name: routeTravelExperienceDetails.name,
                params: { experienceSlug: experience.slug },
                hash: '#experiences',
              }"
              class="text-decoration-none"
            >
              <img
                :src="image(experience)"
                :alt="experience.name"
                class="experience-card__img"
              />
              <p class="experience-card__text">{{ experience.name }}</p>
            </router-link>
          </article>
        </div>
        <!--        <router-view v-slot="{ Component }">-->
        <!--         <transition name="slide" mode="out-in">-->
        <!--          <component :key="$route.path" :is="Component"></component>-->
        <!--         </transition>-->
        <!-- </router-view>-->
      </section>
    </template>
  </AppLayout>
</template>

<script>
import destinations from "@/sourceData/travel/destinations";
import AppLayout from "@/layouts/app/AppLayout";
import AppButton from "@/components/app/AppButton";
import { allRoutes } from "@/router/routes";
import GoBackButton from "@/components/travels/GoBackButton";
import { allColors } from "@/utils/colors";

export default {
  name: "TheTravelDetails",

  components: {
    AppLayout,
    AppButton,
    GoBackButton,
  },

  props: {
    destinationSlug: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    destinations: destinations.destinations,
    routeTravelExperienceDetails: allRoutes.ROUTE_TRAVEL_EXPERIENCE_DETAILS,
    allColors,
  }),

  computed: {
    // destinationSlug() {
    //   return this.$route.params.slug;
    // },

    destination() {
      return this.destinations.find(
        (destination) => destination.slug === this.destinationSlug
      );
    },

    image() {
      return (obj) => require(`@/assets/travels/images/${obj.image}`);
    },

    experiences() {
      return this.destination.experiences;
    },
  },
};
</script>

<style scoped>
/* Destination Details */
.destination-details {
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 50px;
}
.destination-details__img {
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

/*Experiences*/
.experiences {
  padding-top: 30px;
  padding-bottom: 60px;
  margin-top: 60px;
  border-top: 1px solid #d4d4d4;
  box-shadow: 0 -1px #fbfbfb;
}
.experiences__cards {
  display: flex;
  gap: 20px;
  text-align: center;
  justify-content: center;
}
.experience-card {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s ease transform;
}
.experience-card:hover {
  transform: scale(1.05);
}
.experience-card__img {
  width: 250px;
  height: 150px;
  object-fit: cover;
  display: block;
  cursor: pointer;
}
.experience-card__text {
  background: #2c3e50;
  color: white;
  display: block;
  border-top: 2px solid #4e6c71;
  padding: 10px;
  margin-bottom: 0;
}

.experience-details img {
  float: left;
  margin: 10px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

/*.slide-enter,*/
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
