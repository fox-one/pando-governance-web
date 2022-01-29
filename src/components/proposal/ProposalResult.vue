<template>
  <div class="result">
    <div class="result-title">
      {{ $t("results") }}
    </div>

    <div class="divider" />

    <div class="result-items">
      <div v-for="(item, index) in items" :key="index" class="result-item">
        <div class="item-value">
          {{ item.value }}
        </div>

        <div class="item-title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { GlobalGetters } from "@/store/types";

@Component
class ProposalResult extends Vue {
  @Prop() proposal!: API.Proposal;

  get items() {
    const getAppById = this.$store.getters[GlobalGetters.GET_APP_BY_ID];
    const app = getAppById(this.proposal.app_id);
    const memberCount = app?.members.length ?? 0;
    const voteCount = this.proposal.votes.length;

    return [
      {
        title: this.$t("agree"),
        value: voteCount,
      },
      {
        title: this.$t("not-voted"),
        value: memberCount - voteCount,
      },
    ];
  }
}
export default ProposalResult;
</script>

<style lang="scss" scoped>
.result {
  border: 1px solid var(--v-greyscale_5-base);
  border-radius: 8px;

  .divider {
    border-top: 1px solid var(--v-greyscale_5-base);
  }

  .result-title {
    padding: 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  .result-items {
    padding: 24px;
    display: flex;
    flex-wrap: wrap;

    .result-item {
      flex: 0 0 50%;
      max-width: 50%;
      text-align: center;

      .item-title {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-top: 8px;
        color: var(--v-greyscale_3-base);
      }

      .item-value {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
