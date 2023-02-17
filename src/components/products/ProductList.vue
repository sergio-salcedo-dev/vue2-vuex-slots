<template>
  <AppSpinnerGif v-if="isLoading"></AppSpinnerGif>
  <section v-else>
    <article class="d-flex justify-content-evenly align-items-baseline my-3">
      <p>Total: {{ totalProductsCount }}</p>
      <AppButton
        class="btn-sm"
        :variant="allColors.SUCCESS"
        @click="showProductsInStock = !showProductsInStock"
      >
        {{ productsButtonContent }}
      </AppButton>
    </article>
    <ul class="list-unstyled">
      <slot :products="products">
        <li v-for="product in displayedProducts" :key="product.id" class="mb-2">
          <span>
            Product: {{ product.title }} - Price:
            {{ $filters.currency(product.price) }} - Inventory:
            {{ product.inventory }}
          </span>
          <AppButton
            class="ms-3 btn-sm"
            :disabled="!isProductInStock(product)"
            @click="addProductToCart(product)"
          >
            Add to cart
          </AppButton>
        </li>
      </slot>
    </ul>
  </section>
</template>

<script>
import AppButton from "@/components/app/AppButton";
import { allColors } from "@/utils/colors";
import AppSpinnerGif from "@/components/app/AppSpinnerGif";
import * as productsActions from "@/store/modules/products/actions-types";
import * as productGetters from "@/store/modules/products/getters-types";
import * as cartActions from "@/store/modules/cart/actions-types";
import * as productsState from "@/store/modules/products/state-types";
import { createNamespacedHelpers } from "vuex";
import { productsNamespace } from "@/store/modules/products/module-types";
import { cartNamespace } from "@/store/modules/cart/module-types";

const {
  mapState: productMapState,
  mapGetters: productMapGetters,
  mapActions: productMapActions,
} = createNamespacedHelpers(productsNamespace);

const { mapActions: cartMapActions } = createNamespacedHelpers(cartNamespace);

export default {
  name: "ProductList",

  components: {
    AppButton,
    AppSpinnerGif,
  },

  data: () => ({
    allColors,
    showProductsInStock: false,
    isLoading: true,
  }),

  /**
   * @property products
   * @property productsCount
   * @property productsInStock
   * @property productsInStockCount
   * @property isProductInStock
   */
  computed: {
    ...productMapState({ products: productsState.products }),

    ...productMapGetters({
      productsCount: productGetters.productsCount,
      productsInStock: productGetters.productsInStock,
      productsInStockCount: productGetters.productsInStockCount,
      isProductInStock: productGetters.isProductInStock,
    }),

    displayedProducts() {
      return this.showProductsInStock ? this.productsInStock : this.products;
    },

    totalProductsCount() {
      return this.showProductsInStock
        ? this.productsInStockCount
        : this.productsCount;
    },

    productsButtonContent() {
      return this.showProductsInStock
        ? "Show all products"
        : "Show products in stock only";
    },
  },

  created() {
    this.fetchProducts()
      .then(() => (this.isLoading = false))
      .catch((error) => console.log(error));
  },

  /**
   * @function fetchProducts
   * @function addProductToCart
   */
  methods: {
    ...productMapActions({
      fetchProducts: productsActions.fetchProducts,
    }),

    ...cartMapActions({
      addProductToCart: cartActions.addProductToCart,
    }),
  },
};
</script>
