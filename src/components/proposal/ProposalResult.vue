<template>
  <div class="result">
    <div class="result-title">
      Results
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
import { Component, Vue } from "vue-property-decorator";

@Component
class ProposalResult extends Vue {
  get items() {
    return [
      {
        title: "Agree",
        value: 12,
      },
      {
        title: "Not voted",
        value: 8,
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
