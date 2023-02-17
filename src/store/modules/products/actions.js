import ShoppingCartRpc from "@/api/shopping-cart/rpc";
import * as productsActions from "@/store/modules/products/actions-types";
import * as productsMutations from "@/store/modules/products/mutations-types";

export default {
  [productsActions.fetchProducts]({ commit }) {
    try {
      return new Promise((resolve) => {
        ShoppingCartRpc.getProducts((products) =>
          commit(productsMutations.setProducts, products)
        );

        resolve();
      });
    } catch (error) {
      console.log(error);
    }
  },

  [productsActions.decrementProductInventory]({ commit }, product) {
    commit(productsMutations.decrementProductInventory, product);
  },

  [productsActions.incrementProductInventory]({ commit }, product) {
    commit(productsMutations.incrementProductInventory, product);
  },
};
