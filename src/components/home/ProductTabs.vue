<template>
  <f-tabs :value="index" :show-arrows="false" slider-size="2" disable-slider-length @change="handleChange">
    <v-tab v-for="(item, index) in items" :key="index" :ripple="false" class="pa-0 mr-8">
      <div class="tab-item" :class="{ 'tab-item--active': item.value === current }">
        <v-icon v-if="item.icon" :size="16" class="tab-item__icon">{{ item.icon }}</v-icon>
        <v-avatar v-if="item.logo" :size="16" class="tab-item__icon">
          <v-img :src="item.logo" />
        </v-avatar>
        <span class="text">{{ item.text }}</span>

        <active-counts :counts="item.activeCounts" class="ml-1" />
      </div>
    </v-tab>
  </f-tabs>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";
import ActiveCounts from "./ActiveCounts.vue";

export function getProductItems(vm: Vue, isMobile = true) {
  const apps: API.App[] = vm.$store.state.apps.apps;
  const items = apps.map((x: API.App) => {
    return { text: x.name, logo: x.avatar, value: x.id, activeCounts: +x.stat.active_count };
  });
  const totalActiveCounts = items.reduce((p, x) => p + x.activeCounts, 0);

  return [
    {
      text: vm.$t("apps.all"),
      value: "all",
      activeCounts: totalActiveCounts,
      icon: !isMobile && "$IconCategory",
    },
    ...items,
  ];
}

@Component({
  components: {
    ActiveCounts,
  },
})
class ProductTabs extends Vue {
  @PropSync("current") bindCurrent;

  @PropSync("currentKind") bindCurrentKind;

  get index() {
    return this.items.findIndex((x) => x.value === this.bindCurrent);
  }

  get items() {
    return getProductItems(this);
  }

  handleChange(index) {
    const item = this.items[index];

    this.bindCurrent = item.value;

    if (item.value === "all") {
      this.bindCurrentKind = "proposals";
    }
  }
}
export default ProductTabs;
</script>

<style lang="scss" scoped>
.tab-item {
  display: flex;
  align-items: center;
}

.tab-item--active {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}

.tab-item__icon {
  margin-right: 6px;
}

::v-deep {
  .v-slide-group__prev {
    display: none !important;
  }
}
</style>
