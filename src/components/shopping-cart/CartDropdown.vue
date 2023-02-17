<template>
  <div class="dropdown">
    <button
      id="cartDropdownButton"
      class="btn dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <AppBadge :variant="dangerColor" is-rounded class="fs-8">4</AppBadge>
      <CartLogo />
    </button>
    <ul
      class="dropdown-menu dropdown-menu-cart"
      aria-labelledby="cartDropdownButton"
    >
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</template>

<script>
import CartLogo from "@/components/shopping-cart/CartLogo";
import AppBadge from "@/components/app/AppBadge";
import { DANGER } from "@/utils/colors";

export default {
  name: "CartDropdown",

  components: {
    CartLogo,
    AppBadge,
  },

  data: () => ({
    dangerColor: DANGER,
  }),
};
</script>

<style scoped lang="scss">
.dropdown-menu-cart {
  left: unset !important;
  right: 0 !important;
}
</style>
