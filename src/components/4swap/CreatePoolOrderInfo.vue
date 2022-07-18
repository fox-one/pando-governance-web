<template>
  <div v-if="meta.show">
    <div class="label mt-8">{{ $t("lp.generated") }}</div>
    <div class="info-card">
      <div class="card-title">{{ meta.lpSymbol }}</div>
      <div class="card-text">{{ meta.lpName }}</div>
    </div>
    <div class="label mt-8">{{ $t("fee") }}</div>
    <div class="info-card fee">
      <span class="mr-4">
        <v-img width="24" height="24" :src="meta.logo" />
      </span>
      <div>
        <div class="card-title">{{ meta.amount }} {{ meta.symbol }}</div>
        <div class="card-text">{{ meta.fiat }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { toPrecision } from "@foxone/utils/number"
import type { CreateOrderResponse } from "swaplp";

@Component
class CreatePoolOrderInfo extends Vue {
  @Prop() orderResp!: CreateOrderResponse;

  @Prop() paymentAsset;

  get meta() {
    const order = this.orderResp?.order;
    const transfer = this.orderResp?.transfer;
    const price = this.paymentAsset?.price_usd ?? 0;
    const fiatAmount = +(transfer?.amount ?? 0) * price

    return {
      show: this.orderResp && this.paymentAsset,
      lpSymbol: order?.lpSymbol ?? "",
      lpName: order?.lpName ?? "",
      logo: this.paymentAsset?.icon_url ?? "",
      symbol: this.paymentAsset?.symbol ?? "",
      amount: transfer?.amount ?? "",
      fiat: "$ " + toPrecision({ n: fiatAmount, dp: 2 })
    }
  }
}
export default CreatePoolOrderInfo;
</script>

<style lang="scss" scoped>
.label {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 16px;
}

.fee {
  display: inline-flex;
  align-items: center;
}

.info-card {
  display: inline-block;
  border: 1px solid var(--v-greyscale_5-base);
  border-radius: 8px;
  padding: 6px 12px;

  .card-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    font-feature-settings: "case" on;
  }

  .card-text {
    margin-top: 4px;
    color: var(--v-greyscale_3-base);
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    font-feature-settings: "case" on;
  }
}
</style>
