<template>
  <img :src="logo" alt="cart logo" />
</template>

<script>
import CartLogo from "@/assets/shopping-cart/cart-logo.svg";

export default {
  name: "CartLogo",

  data: () => ({
    logo: CartLogo,
  }),
};
</script>

<style scoped lang="scss">
.dropdown-menu-cart {
  left: unset !important;
  right: 0 !important;
}
</style>
