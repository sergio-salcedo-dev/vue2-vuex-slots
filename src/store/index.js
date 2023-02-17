import { createStore } from "vuex";
import { cartNamespace } from "@/store/modules/cart/module-types";
import { productsNamespace } from "@/store/modules/products/module-types";
import cartModule from "@/store/modules/cart/index";
import productsModule from "@/store/modules/products/index";

export default createStore({
  modules: {
    [cartNamespace]: cartModule,
    [productsNamespace]: productsModule,
  },

  state: {},

  getters: {},

  mutations: {},

  actions: {},
});
