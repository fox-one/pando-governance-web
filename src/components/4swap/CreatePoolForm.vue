<template>
  <div>
    <div class="label">!!Asset 1</div>
    <f-asset-select :asset="asset1" :assets="meta.selects" @input="handleAsset1Change" />

    <div class="label mt-8">!!Asset 2</div>
    <f-asset-select :asset="asset2" :assets="meta.selects" @input="handleAsset2Change" />

    <create-pool-order-info :orderResp="orderResp" :paymentAsset="paymentAsset" />

    <create-pool-rule class="mt-8" />

    <connect-action class="mt-8">
      <create-pool-action
        :asset1="asset1"
        :asset2="asset2"
        :orderResp.sync="orderResp"
        :paymentAsset.sync="paymentAsset"
      />
    </connect-action>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreatePoolRule from "./CreatePoolRule.vue";
import CreatePoolAction from "./CreatePoolAction.vue";
import CreatePoolOrderInfo from "./CreatePoolOrderInfo.vue";
import type { Asset, CreateOrderResponse } from "swaplp";

@Component({
  components: {
    CreatePoolRule,
    CreatePoolAction,
    CreatePoolOrderInfo
  }
})
class CreatePoolForm extends Vue {
  asset1: null | Asset = null;

  asset2: null | Asset = null;

  orderResp: null | CreateOrderResponse = null;

  paymentAsset: any = null;

  get meta() {
    const assets: Asset[] = this.$store.state.fswap.assets;
    const selects = assets.map((x) => ({ ...x, id: x.assetId }));

    return { assets, selects }
  }

  handleAsset1Change(asset: Asset) {
    if (asset.assetId === this.asset2?.assetId) {
      this.handleSwitch()
    } else {
      this.asset1 = asset;
    }
  }

  handleAsset2Change(asset: Asset) {
    if (asset.assetId === this.asset1?.assetId) {
      this.handleSwitch()
    } else {
      this.asset2 = asset;
    }
  }

  handleSwitch() {
    const temp = this.asset1;

    this.asset1 = this.asset2;
    this.asset2 = temp;
  }
}
export default CreatePoolForm;
</script>

<style lang="scss" scoped>
.label {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 16px;
}
</style>
