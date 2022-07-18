<template>
  <div class="proposal-actions">
    <template v-if="items.length">
      <proposal-action v-for="(item, index) in items" :key="index" :item="item" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProposalAction from "./ProposalAction.vue";
import ConnectAction from "../common/ConnectAction.vue";

@Component({
  components: {
    ProposalAction,
    ConnectAction,
  },
})
class ProposalActions extends Vue {
  @Prop() currentTab;

  get items() {
    const actions = {
      // 4swap
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62": [
        {
          text: this.$t("pool.create"),
          action: () => {
            this.$router.push({ name: "4swap-pool-create" });
          },
        },
      ],
    };

    return actions[this.currentTab] ?? [];
  }
}
export default ProposalActions;
</script>
