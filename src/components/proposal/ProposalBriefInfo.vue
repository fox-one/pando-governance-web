<template>
  <div class="brief-info">
    <div class="brief-info__title">
      Proposal Info
    </div>
    <div class="divider"></div>
    <div class="brief-info__items">
      <v-layout v-for="(item, index) in items" :key="index" class="brief-info__item">
        <v-flex class="item-title">{{ item.title }}</v-flex>
        <span class="item-value">{{ item.value }}</span>
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class ProposalBriefInfo extends Vue {
  get items() {
    return [
      {
        title: "Dapp",
        value: "4swap",
      },
      {
        title: "State",
        value: "Active",
      },
      {
        title: "Author",
        value: "Node #1: 3354687665",
      },
      {
        title: "Date",
        value: "Dec 27,2021,12:00 PM",
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
