import * as productState from "@/store/modules/products/state-types";
import * as productMutations from "@/store/modules/products/mutations-types";

export default {
  /**
   * @param state
   * @param {{price: number, id: number, title: string, inventory: number}[]} products
   */
  [productMutations.setProducts](state, products) {
    state[productState.products] = products;
  },

  /**
   * @param state
   * @param {{price: number, id: number, title: string, inventory: number}} product
   */
  [productMutations.incrementProductInventory](state, product) {
    product.inventory++;
  },

  /**
   * @param state
   * @param {{price: number, id: number, title: string, inventory: number}} product
   */
  [productMutations.decrementProductInventory](state, product) {
    product.inventory--;
  },
};
