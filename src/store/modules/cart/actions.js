import ShoppingCartRpc from "@/api/shopping-cart/rpc";
import * as cartActions from "@/store/modules/cart/actions-types";
import * as cartMutations from "@/store/modules/cart/mutations-types";
import * as cartGetters from "@/store/modules/cart/getters-types";
import * as cartState from "@/store/modules/cart/state-types";
import * as productGetters from "@/store/modules/products/getters-types";
import { states } from "@/utils/states";
import { productsNamespace } from "@/store/modules/products/module-types";
import * as productActions from "@/store/modules/products/actions-types";

export default {
  /**
   * @param dispatch
   * @param commit
   * @param getters
   * @param rootGetters
   * @param {{price: number, id: number, title: string, inventory: number}} product
   */
  [cartActions.addProductToCart](
    { dispatch, commit, getters, rootGetters },
    product
  ) {
    if (
      !rootGetters[`${productsNamespace}/${productGetters.isProductInStock}`](
        product
      )
    ) {
      return;
    }

    const cartItem = getters[cartGetters.getCartItem](product);

    if (cartItem) {
      commit(cartMutations.incrementCartItemQuantity, cartItem);
    } else {
      commit(cartMutations.pushProductToCart, product);
    }

    dispatch(
      `${productsNamespace}/${productActions.decrementProductInventory}`,
      product,
      { root: true }
    );
  },

  /**
   * @param context
   * @param {{price: number, id: number, title: string, inventory: number}} product
   */
  [cartActions.deleteProductInCart](context, product) {
    const cartItem = context.getters[cartGetters.getCartItem](product);

    if (!cartItem) {
      return;
    }

    const theProduct =
      context.rootGetters[`${productsNamespace}/${productGetters.getProduct}`](
        product
      );

    context.commit(cartMutations.decrementCartItemQuantity, cartItem);
    context.commit(cartMutations.setCart, context.state[cartState.cart]);
    context.dispatch(
      `${productsNamespace}/${productActions.incrementProductInventory}`,
      theProduct,
      { root: true }
    );
  },

  /**
   * @param state
   * @param commit
   * @returns {Promise<*>}
   */
  [cartActions.checkout]({ state, commit }) {
    return new Promise((resolve) => {
      const successCallback = () => {
        // Empty cart
        commit(cartMutations.setCart, []);
        commit(cartMutations.setCheckoutStatus, states.SUCCESS);
      };
      const errorCallback = () =>
        commit(cartMutations.setCheckoutStatus, states.FAILED);

      ShoppingCartRpc.buyProducts(
        state[cartState.cart],
        successCallback,
        errorCallback
      );

      resolve();
    });
  },
};
