import { createRouter, createWebHistory } from "vue-router";
import { allRoutes, routes } from "@/router/routes";
import destinations from "@/sourceData/travel/destinations";

const router = createRouter({
  linkExactActiveClass: "vue-school-active-link",
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     const position = {};
  //
  //     if (to.hash) {
  //       position.selector = to.hash;
  //
  //       if (to.hash === "#experiences") {
  //         position.offset = { y: 250 };
  //       }
  //
  //       if (document.querySelector(to.hash)) {
  //         return position;
  //       }
  //
  //       return false;
  //     }
  //   }
  // },
  scrollBehavior(to, from, savedPosition) {
    let position = {};

    if (savedPosition) {
      position = savedPosition;
    } else if (to.hash) {
      if (document.querySelector(to.hash)) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          // position.offset = { y: 140 };
        }
      }
    } else position = { x: 0, y: 0 };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 330);
    });
  },
});

router.beforeEach((to, from, next) => {
  // if (to.path.includes(allRoutes.ROUTE_TRAVEL_DETAILS.path)) {
  //   const hasUrlQueryParameters = Object.keys(to.query).length !== 0;
  //   // http://localhost:8080/travel-details?destination=brazil
  //   return hasUrlQueryParameters
  //     ? next({
  //         name: allRoutes.ROUTE_TRAVEL_DETAILS.name,
  //         query: to.query,
  //       })
  //     : next();
  // }

  const needsToLoginIn = to.matched.some((record) => record.meta.requiresAuth);

  return needsToLoginIn && !destinations.userAuthenticated
    ? next({
        name: allRoutes.ROUTE_LOGIN.name,
        query: { redirect: to.fullPath },
      })
    : next();
});

export default router;
