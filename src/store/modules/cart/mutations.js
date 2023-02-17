import * as cartMutations from "@/store/modules/cart/mutations-types";
import * as cartState from "@/store/modules/cart/state-types";

export default {
  /**
   * @param state
   * @param {{price: number, id: number, title: string, quantity: number}[]} cart
   */
  [cartMutations.setCart](state, cart) {
    state[cartState.cart] = cart.filter(({ quantity }) => quantity > 0);
  },

  /**
   * @param state
   * @param {{price: number, id: number, title: string, inventory: number}} product
   */
  [cartMutations.pushProductToCart](state, product) {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    state[cartState.cart].push(cartItem);
  },

  /**
   * @param state
   * @param {{price: number, id: number, title: string, quantity: number}} cartItem
   */
  [cartMutations.incrementCartItemQuantity](state, cartItem) {
    cartItem.quantity++;
  },

  /**
   * @param state
   * @param {{price: number, id: number, title: string, quantity: number}} cartItem
   */
  [cartMutations.decrementCartItemQuantity](state, cartItem) {
    cartItem.quantity--;
  },

  /**
   * @param state
   * @param {string} status
   */
  [cartMutations.setCheckoutStatus](state, status) {
    state[cartState.checkoutStatus] = status;
  },
};
