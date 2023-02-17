import state from "@/store/modules/products/state";
import getters from "@/store/modules/products/getters";
import mutations from "@/store/modules/products/mutations";
import actions from "@/store/modules/products/actions";

const productsModule = {
  namespaced: true,

  modules: {},

  state,

  getters,

  mutations,

  actions,
};

export default productsModule;
