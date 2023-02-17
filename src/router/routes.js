import HomeView from "@/views/HomeView";
import { capitalize, removeFirstCharacter } from "@/utils/string-functions";
import destinations from "@/sourceData/travel/destinations";

/**
 * @param {string} path
 * @param {?string} name
 * @param {?string} nameDisplayed
 * @returns {{path, name, nameDisplayed}}
 */
const setRouteData = (path, name = null, nameDisplayed = null) => {
  const theName = name ?? removeFirstCharacter(path);
  const theNameDisplayed =
    nameDisplayed ?? capitalize(theName).replaceAll("-", "");

  return {
    path: path,
    name: theName,
    nameDisplayed: theNameDisplayed,
  };
};

export const ROUTE_HOME = setRouteData("/", "home", "Home");
const ROUTE_TRAVEL = setRouteData("/travels", "travels", "Travels");
const ROUTE_ABOUT = setRouteData("/about", "about", "About");
const ROUTE_USERS = setRouteData("/users", "users", "Users");
const ROUTE_WORKERS = setRouteData("/workers");
const ROUTE_CUSTOMERS = setRouteData("/customers");
const ROUTE_TRAVEL_DETAILS = setRouteData("/travel-details");
const ROUTE_TRAVEL_EXPERIENCE_DETAILS = setRouteData("/experience");
const ROUTE_LOGIN = setRouteData("/login");
const ROUTE_DASHBOARD = setRouteData("/dashboard");
const ROUTE_DASHBOARD_INVOICES = setRouteData("/invoices");
const ROUTE_SHOP = setRouteData("/shop");
const ROUTE_ERROR_404 = setRouteData(
  "/:pathMatch(.*)*",
  "not-found",
  "Error 404. Page not found"
);

export const menuRoutes = [
  ROUTE_ABOUT,
  ROUTE_USERS,
  ROUTE_WORKERS,
  ROUTE_CUSTOMERS,
  ROUTE_SHOP,
];

export const allRoutes = {
  ROUTE_HOME,
  ROUTE_TRAVEL,
  ROUTE_ABOUT,
  ROUTE_USERS,
  ROUTE_WORKERS,
  ROUTE_CUSTOMERS,
  ROUTE_TRAVEL_DETAILS,
  ROUTE_TRAVEL_EXPERIENCE_DETAILS,
  ROUTE_LOGIN,
  ROUTE_DASHBOARD,
  ROUTE_DASHBOARD_INVOICES,
  ROUTE_SHOP,
  ROUTE_ERROR_404,
};

const routeTravel = {
  path: `${ROUTE_TRAVEL_DETAILS.path}/:destinationSlug`,
  name: ROUTE_TRAVEL_DETAILS.name,
  component: () =>
    import(
      /* webpackChunkName: "the-travel-details" */ "@/views/TheTravelDetails.vue"
    ),
  props: true,
  children: [
    {
      path: ":experienceSlug",
      name: ROUTE_TRAVEL_EXPERIENCE_DETAILS.name,
      component: () =>
        import(
          /* webpackChunkName: "the-travel-experience-details" */ "@/views/TheTravelExperienceDetails.vue"
        ),
      props: true,
      beforeEnter(to, from, next) {
        let routeExists = false;

        destinations.destinations.forEach(({ experiences }) => {
          experiences.forEach((experience) => {
            if (experience.slug === to.params.experienceSlug) {
              routeExists = true;
            }
          });
        });

        routeExists ? next() : next({ name: ROUTE_ERROR_404.name });
      },
    },
  ],
  beforeEnter(to, from, next) {
    const routeExists = destinations.destinations.find(
      (destination) => destination.slug === to.params.destinationSlug
    );

    routeExists ? next() : next({ name: ROUTE_ERROR_404.name });
  },
};

export const routes = [
  {
    path: ROUTE_HOME.path,
    name: ROUTE_HOME.name,
    component: HomeView,
  },
  {
    path: ROUTE_ABOUT.path,
    name: ROUTE_ABOUT.name,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: ROUTE_TRAVEL.path,
    name: ROUTE_TRAVEL.name,
    component: () =>
      import(/* webpackChunkName: "travels" */ "@/views/TravelsView.vue"),
  },
  {
    path: ROUTE_USERS.path,
    name: ROUTE_USERS.name,
    component: () =>
      import(/* webpackChunkName: "users" */ "@/views/UsersView.vue"),
  },
  {
    path: ROUTE_WORKERS.path,
    name: ROUTE_WORKERS.name,
    component: () =>
      import(/* webpackChunkName: "workers" */ "@/views/WorkersView.vue"),
  },
  {
    path: ROUTE_CUSTOMERS.path,
    name: ROUTE_CUSTOMERS.name,
    component: () =>
      import(/* webpackChunkName: "customers" */ "@/views/CustomersView.vue"),
  },
  routeTravel,
  {
    path: ROUTE_LOGIN.path,
    name: ROUTE_LOGIN.name,
    component: () =>
      import(/* webpackChunkName: "the-login" */ "@/views/TheLogin.vue"),
  },
  {
    path: ROUTE_DASHBOARD.path,
    name: ROUTE_DASHBOARD.name,
    component: () =>
      import(
        /* webpackChunkName: "the-dashboard" */ "@/views/TheDashboard.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: ROUTE_DASHBOARD_INVOICES.path,
    name: ROUTE_DASHBOARD_INVOICES.name,
    component: () =>
      import(
        /* webpackChunkName: "customer-invoices" */ "@/components/dashboard/DashboardInvoices.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: ROUTE_SHOP.path,
    name: ROUTE_SHOP.name,
    component: () =>
      import(/* webpackChunkName: "the-shop" */ "@/views/TheShop.vue"),
  },
  {
    path: ROUTE_ERROR_404.path,
    name: ROUTE_ERROR_404.name,
    component: () =>
      import(/* webpackChunkName: "error-404" */ "@/views/TheError404.vue"),
  },
];
