<template>
  <AppLayout>
    <template #main>
      <section class="d-flex flex-column align-items-center">
        <h1 class="h1 text-center text-capitalize my-3">Products</h1>
        <ProductList />
        <hr class="mx-5" />
        <ShoppingCart />
      </section>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/app/AppLayout";
import ProductList from "@/components/products/ProductList";
import ShoppingCart from "@/components/shopping-cart/ShoppingCart";

export default {
  name: "TheShop",

  components: {
    AppLayout,
    ProductList,
    ShoppingCart,
  },
};
</script>
