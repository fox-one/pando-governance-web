<template>
  <div class="brief-info sticky-top">
    <div class="brief-info__title">
      {{ $t("proposal.info") }}
    </div>
    <div class="divider"></div>
    <div class="brief-info__items">
      <v-layout v-for="(item, index) in items" :key="index" align-center class="brief-info__item">
        <v-flex class="item-title">{{ item.title }}</v-flex>
        <span class="item-value">
          <v-avatar v-if="item.logo" :size="16" class="mr-1">
            <v-img :src="item.logo" />
          </v-avatar>

          <f-render :nodes="item.value" />
        </span>
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProposalState from "./ProposalState.vue";
import { GlobalGetters } from "@/store/types";

@Component({
  components: {
    ProposalState,
  },
})
class ProposalBriefInfo extends Vue {
  @Prop() proposal!: API.Proposal;

  get items() {
    const proposal = this.proposal;
    const getAppById = this.$store.getters[GlobalGetters.GET_APP_BY_ID];
    const app = getAppById(this.proposal.app_id);

    return [
      {
        title: this.$t("dapp"),
        value: app?.name ?? "",
        logo: app?.avatar ?? "",
      },
      {
        title: this.$t("state"),
        value: this.$createElement(ProposalState, {
          props: { state: proposal.status, small: true },
        }),
      },
      {
        title: this.$t("author"),
        value: proposal.creator.name,
        logo: proposal.creator.avatar,
      },
      {
        title: this.$t("date"),
        value: this.$utils.time.format(proposal.created_at),
      },
    ];
  }
}
export default ProposalBriefInfo;
</script>

<style lang="scss" scoped>
.brief-info {
  border: 1px solid var(--v-greyscale_5-base);
  border-radius: 8px;

  &__title {
    padding: 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  &__items {
    padding: 24px;

    .item-title {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: var(--v-greyscale_3-base);
    }

    .item-value {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      word-break: break-all;
    }
  }

  &__item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .divider {
    border-top: 1px solid var(--v-greyscale_5-base);
  }
}
</style>
