<template>
  <f-button :disabled="!valid" :loading="loading" color="primary" @click="handleCreate">
    <span v-if="meta.created">!!Pair has been Created</span>
    <span>!!Create</span>
  </f-button>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
import type { Pair, Asset } from "swaplp"
import { GlobalActions } from "~/store/types";

@Component
class CreatePoolAction extends Vue {
  @Prop() asset1!: Asset | null;

  @Prop() asset2!: Asset | null;

  @PropSync("orderResp") bindOrderResp;

  @PropSync("paymentAsset") bindPaymentAsset;

  loading = false;

  get meta() {
    const pairs:Pair[] = this.$store.state.fswap.pairs;
    const id1 = this.asset1?.assetId ?? '';
    const id2 = this.asset2?.assetId ?? ""
    const created = pairs.find(({ baseAssetId, quoteAssetId }) => {
      return (baseAssetId === id1 && quoteAssetId === id2) || (baseAssetId === id2  && quoteAssetId === id1)
    })

    return { created: Boolean(created) , pairs };
  }

  get valid() {
    return this.asset1 && this.asset2 && !this.meta.created;
  }

  async handleCreate() {
    this.loading = true;

    try {
      const orderResp = await this.$apis.CreateOrderJSON({
        baseAssetId: this.asset1?.assetId ?? "",
        quoteAssetId: this.asset2?.assetId ?? ""
      });
      const { order, transfer }  = orderResp;
      const { data: asset } = await this.$apis.getAsset(transfer.assetId);

      this.bindOrderResp = orderResp;
      this.bindPaymentAsset = asset;

      await this.$uikit.passport.payment({
        amount: transfer.amount,
        assetId: transfer.assetId,
        recipient: transfer.opponentId,
        memo: transfer.memo,
        traceId: transfer.traceId,
        checker: async () => {
          const resp = await this.$apis.FindOrderJSON({ id: order.id});
          const state = resp.order.state;

          if (state === "REJECTED") {
            this.$uikit.toast.error({ message: "Rejected" })
            return true;
          }

          if (state === "PROCESSED") {
            await this.$store.dispatch(GlobalActions.LOAD_PAIRS)
            this.$uikit.toast.success({ message: "Processed" })
            return true;
          }

          return false
        },
        info: {
          logo: asset?.icon_url ?? "",
          symbol: asset?.symbol ?? "",
          amount: transfer.amount
        }
      })
    } catch (error) {
      this.$utils.helper.errorHandler(this, error)
    }

    this.loading = false
  }
}
export default CreatePoolAction;
</script>
