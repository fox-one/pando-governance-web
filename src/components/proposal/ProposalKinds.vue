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

    <v-spacer />

    <proposal-actions :current-tab="currentTab" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
import ProposalKindItem from "./ProposalKindItem.vue";
import ProposalActions from "./ProposalActions.vue";
import { GlobalGetters } from "@/store/types";

@Component({
  components: {
    ProposalKindItem,
    ProposalActions,
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

  ::v-deep {
    .gover-btn {
      padding: 16px 24px !important;
      border-radius: 8px !important;
      font-weight: 500 !important;
      font-size: 14px !important;
      line-height: 17px !important;
      height: auto !important;
    }
  }
}

.proposal-kinds.proposal-kinds--mobile {
  margin-top: 16px;

  ::v-deep {
    .proposal-kind-item,
    .gover-btn {
      font-size: 12px !important;
      line-height: 15px !important;
      padding: 10px 12px !important;
    }
  }
}
</style>
