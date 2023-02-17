<template>
  <div class="cart">
    <h2 class="text-center mb-3">Your Cart</h2>

    <ul class="list-unstyled">
      <slot :cart-items="cartItems">
        <li v-for="cartItem in cartItems" :key="cartItem.id" class="mb-2">
          <span>
            Product: {{ cartItem.title }} - Price:
            {{ $filters.currency(cartItem.price) }} - Quantity:
            {{ cartItem.quantity }}
          </span>
          <AppButton class="ms-3 btn-sm" @click="deleteProductInCart(cartItem)">
            Delete
          </AppButton>
        </li>
      </slot>
    </ul>

    <h3 class="text-center mb-3">
      Cart total: {{ $filters.currency(cartTotal) }}
    </h3>

    <div class="text-center">
      <AppButton
        class="btn-sm"
        :disabled="isCartEmpty"
        :variant="allColors.SUCCESS"
        @click="checkoutCart"
      >
        Checkout
      </AppButton>

      <p class="my-3 text-danger">{{ checkoutStatus }}</p>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/app/AppButton";
import { allColors } from "@/utils/colors";
import { createNamespacedHelpers } from "vuex";
import * as cartState from "@/store/modules/cart/state-types";
import { cartNamespace } from "@/store/modules/cart/module-types";
import * as cartActions from "@/store/modules/cart/actions-types";
import * as cartGetters from "@/store/modules/cart/getters-types";

const {
  mapState: cartMapState,
  mapGetters: cartMapGetters,
  mapActions: cartMapActions,
} = createNamespacedHelpers(cartNamespace);

export default {
  name: "ShoppingCart",

  components: {
    AppButton,
  },

  data: () => ({
    allColors,
  }),

  /**
   * @property cartItems
   * @property checkoutStatus
   * @property cartTotal
   * @property isCartEmpty
   */
  computed: {
    ...cartMapState({
      cartItems: cartState.cart,
      checkoutStatus: cartState.checkoutStatus,
    }),

    ...cartMapGetters({
      cartTotal: cartGetters.cartTotal,
      isCartEmpty: cartGetters.isCartEmpty,
    }),
  },

  /**
   * @function deleteProductInCart
   * @function checkout
   */
  methods: {
    ...cartMapActions({
      deleteProductInCart: cartActions.deleteProductInCart,
      checkout: cartActions.checkout,
    }),

    checkoutCart() {
      this.checkout()
        .then(() => console.log("checkout clicked"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
