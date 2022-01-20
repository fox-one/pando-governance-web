<template>
  <f-tabs :show-arrows="false" slider-size="2" disable-slider-length>
    <v-tab v-for="(item, index) in PRODUCTS" :key="index" :ripple="false">
      <div class="tab-item" :class="{ 'tab-item--active': item.value === current }">
        <v-icon v-if="!hideIcon" size="16">{{ item.icon }}</v-icon>
        <span class="text">{{ item.text }}</span>
      </div>
    </v-tab>
  </f-tabs>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { PRODUCTS } from "./ProductSidebar.vue";

@Component
class ProductTabs extends Vue {
  @Prop() current;

  PRODUCTS = PRODUCTS;
}
export default ProductTabs;
</script>

<style lang="scss" scoped>
.text {
  margin-left: 6px;
}

.tab-item--active {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}

::v-deep {
  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
