<template>
  <div class="proposal-kinds" :class="{ 'proposal-kinds--mobile': isMobile }">
    <proposal-kind-item
      v-for="(kind, index) in kinds"
      :index="index"
      :text="kind.text"
      :active="kind.value === bindCurrentKind"
      :key="index"
      @click.native="handleSelect(kind)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
import ProposalKindItem from "./ProposalKindItem.vue";
import { GlobalGetters } from "@/store/types";

@Component({
  components: {
    ProposalKindItem,
  },
})
class ProposalKinds extends Vue {
  @Prop() currentTab;

  @PropSync("currentKind") bindCurrentKind;

  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }

  get show() {
    return this.currentTab !== "all";
  }

  get kinds() {
    if (!this.show) {
      return [];
    }

    const getAppById = this.$store.getters[GlobalGetters.GET_APP_BY_ID];
    const app: API.App = getAppById(this.currentTab);
    const proposalCounts = app.stat.total_count;
    const nodeCounts = app.members.length;

    return [
      {
        text: `${proposalCounts} ` + this.$t("proposals"),
        value: "proposals",
      },
      {
        text: `${nodeCounts} ` + this.$t("nodes"),
        value: "nodes",
      },
    ];
  }

  handleSelect(kind) {
    this.bindCurrentKind = kind.value;
  }
}
export default ProposalKinds;
</script>

<style lang="scss" scoped>
.proposal-kinds {
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  &--mobile {
    margin-top: 16px;

    ::v-deep {
      .proposal-kind-item {
        font-size: 12px;
        line-height: 15px;
        padding: 10px 12px;
      }
    }
  }
}
</style>
