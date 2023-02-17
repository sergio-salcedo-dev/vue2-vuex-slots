import * as productState from "@/store/modules/products/state-types";
import * as productGetters from "@/store/modules/products/getters-types";

export default {
  /** @return {number} */
  [productGetters.productsCount](state) {
    // state with object destructuring - console.log({ products: [productState.products] });
    return state[productState.products].length;
  },

  /** @return {[{price: number, id: number, title: string, inventory: number}]} */
  [productGetters.productsInStock](state) {
    return state[productState.products].filter(
      (product) => product.inventory > 0
    );
  },

  [productGetters.productsInStockCount](state, getters) {
    return getters[productGetters.productsInStock].length;
  },

  /** @return {function(product): boolean} */
  [productGetters.isProductInStock](state, getters) {
    return (product) =>
      getters[productGetters.productsInStock].some(
        ({ id }) => id === product.id
      );
  },

  /**
   * If product exits returns the product, if not returns undefined
   * @return {function(product: {price: number, id: number, title: string, inventory: number})}
   */
  [productGetters.getProduct](state) {
    return (product) =>
      state[productState.products].find(({ id }) => id === product.id);
  },

  /**
   * If product exits returns the product, if not returns undefined
   * @return {function(product: {price: number, id: number, title: string, inventory: number})}
   */
  [productGetters.getProductById](state) {
    return (id) => state.products.find((product) => product.id === id);
  },
};
