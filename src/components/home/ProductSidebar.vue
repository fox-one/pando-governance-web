<template>
  <div class="product-sidebar">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="product-item"
      :class="[{ 'product-item--active': item.value === current }]"
      @click="handleSelect(item)"
    >
      <v-icon v-if="item.icon" class="mr-4">{{ item.icon }}</v-icon>
      <v-avatar v-if="item.logo" :size="24" class="mr-4">
        <v-img :src="item.logo" />
      </v-avatar>
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component
class ProductSidebar extends Vue {
  @PropSync("current") bindCurrent;

  get items() {
    const apps = this.$store.state.apps.apps;
    const items = apps.map((x) => {
      return { text: x.name, logo: x.avatar, value: x.id };
    });

    return [
      {
        text: "All DApps",
        icon: "$IconCategory",
        value: "all",
      },
      ...items,
    ];
  }

  handleSelect(item) {
    this.bindCurrent = item.value;
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
