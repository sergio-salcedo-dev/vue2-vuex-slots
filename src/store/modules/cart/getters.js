import * as cartGetters from "@/store/modules/cart/getters-types";
import * as cartState from "@/store/modules/cart/state-types";

export default {
  /**
   * If product is in cart returns the product, if not returns undefined
   * @return {function(cartItem: {price: number, id: number, title: string, quantity: number})}
   */
  [cartGetters.getCartItem](state) {
    return (cartItem) =>
      state[cartState.cart].find(({ id }) => id === cartItem.id);
  },

  /**
   * If product is in cart returns the product, if not returns undefined
   * @return {function(cartItem: {price: number, id: number, title: string, quantity: number})}
   */
  [cartGetters.getCartItemById](state) {
    return (id) => state[cartState.cart].find((cartItem) => cartItem.id === id);
  },

  /** @return {number} */
  [cartGetters.cartTotal](state) {
    return state[cartState.cart].reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  },

  /*** @return {boolean} */
  [cartGetters.isCartEmpty](state) {
    return state[cartState.cart].length === 0;
  },
};
