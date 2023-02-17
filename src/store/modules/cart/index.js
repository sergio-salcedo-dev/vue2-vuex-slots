import state from "@/store/modules/cart/state";
import getters from "@/store/modules/cart/getters";
import mutations from "@/store/modules/cart/mutations";
import actions from "@/store/modules/cart/actions";

const cartModule = {
  namespaced: true,

  modules: {},

  state,

  getters,

  mutations,

  actions,
};

export default cartModule;
