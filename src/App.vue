<template>
  <!--  <router-view v-slot="slotProps">-->
  <!--    <transition name="app-transition-1" mode="out-in">-->
  <!--      <component-->
  <!--        :key="$route.params.slug"-->
  <!--        :is="slotProps.Component"-->
  <!--      ></component>-->
  <!--    </transition>-->
  <!--  </router-view>-->

  <!--  <router-view v-slot="{ Component }">-->
  <!--    <transition name="app-transition-1" mode="out-in">-->
  <!--      <component :key="$route.params.slug" :is="Component"></component>-->
  <!--    </transition>-->
  <!--  </router-view>-->

  <!--  <router-view v-slot="{ Component }">-->
  <!--    <transition name="app-transition-1" mode="out-in">-->
  <!--      <component :key="$route.path" :is="Component"></component>-->
  <!--    </transition>-->
  <!--  </router-view>-->

  <router-view :key="$route.path"></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
.app-transition-1-enter-active,
.app-transition-1-leave-active {
  transition: opacity 0.5s ease;
}

/*.app-transition-1-enter,*/
.app-transition-1-enter-from,
.app-transition-1-leave-to {
  opacity: 0;
}

.app-transition-2-enter-active,
.app-transition-2-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.app-transition-2-enter,
.app-transition-2-enter-from,
.app-transition-2-leave-to {
  opacity: 0;
  transform: translateX(-10%);
  //transform: translateY(10%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-400px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
