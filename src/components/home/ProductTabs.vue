<template>
  <f-tabs v-model="bindCurrent" :show-arrows="false" slider-size="2" disable-slider-length>
    <v-tab v-for="(item, index) in PRODUCTS" :key="index" :ripple="false" :value="item.value">
      <div class="tab-item" :class="{ 'tab-item--active': item.value === current }">
        <v-icon size="16">{{ item.icon }}</v-icon>
        <span class="text">{{ item.text }}</span>
      </div>
    </v-tab>
  </f-tabs>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component
class ProductTabs extends Vue {
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
