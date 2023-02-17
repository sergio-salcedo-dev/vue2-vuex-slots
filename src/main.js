import "bootstrap/dist/css/bootstrap.css";
import "@/styles/css/app/styles.css";
import { createApp } from "vue";
import router from "@/router";
import App from "@/App";
import "bootstrap/dist/js/bootstrap.js";
import shoppingCartStore from "@/store";
import { currency } from "@/utils/currency";

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency,
};

app.use(shoppingCartStore).use(router).mount("#app");
