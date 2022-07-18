<template>
  <div class="product-sidebar">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="product-item"
      :class="[{ 'product-item--active': item.value === current }]"
      @click="handleSelect(item)"
    >
      <v-icon v-if="item.icon" :size="20" class="mr-4">{{ item.icon }}</v-icon>
      <v-avatar v-if="item.logo" :size="20" class="mr-4">
        <v-img :src="item.logo" />
      </v-avatar>
      <span>{{ item.text }}</span>
      <active-counts :counts="item.activeCounts" class="ml-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";
import { getProductItems } from "./ProductTabs.vue";
import ActiveCounts from "./ActiveCounts.vue";

@Component({
  components: {
    ActiveCounts,
  },
})
class ProductSidebar extends Vue {
  @PropSync("current") bindCurrent;

  @PropSync("currentKind") bindCurrentKind;

  get items() {
    return getProductItems(this, false);
  }

  handleSelect(item) {
    this.bindCurrent = item.value;

    if (item.value === "all") {
      this.bindCurrentKind = "proposals";
    }
  }
}
export default ProductSidebar;
</script>

<style lang="scss" scoped>
.product-sidebar {
  position: sticky;
  top: 120px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: var(--v-greyscale_2-base);

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
  color: var(--v-greyscale_1-base);
  font-weight: 600;

  &::after {
    display: block;
  }
}
</style>
