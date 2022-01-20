<template>
  <div class="product-sidebar">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="product-item"
      :class="[{ 'product-item--active': item.value === current }]"
    >
      <v-icon class="pr-4">{{ item.icon }}</v-icon>
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export const PRODUCTS = [
  {
    text: "All DApps",
    icon: "$IconCategory",
    value: "all",
  },
  {
    text: "Pando Lake",
    icon: "$FIconLakeLogo",
    value: "lake",
  },
  {
    text: "Pando Rings",
    icon: "$FIconRingsLogo",
    value: "rings",
  },
  {
    text: "Pando Leaf",
    icon: "$FIconLeafLogo",
    value: "leaf",
  },
  {
    text: "4Swap",
    icon: "$FIconFSwapLogo",
    value: "4swap",
  },
];

@Component
class ProductSidebar extends Vue {
  @Prop() current;

  items = PRODUCTS;
}
export default ProductSidebar;
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  padding: 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--v-greyscale_1-base);
  }
}

.product-item.product-item--active {
  background: var(--v-greyscale_6-base);
  font-weight: 600;

  &::after {
    display: block;
  }
}
</style>
