<template>
  <div class="proposal-details">
    <div class="proposal-title mb-4">
      {{ meta.title }}
    </div>

    <div class="proposal-items">
      <div v-for="(item, index) in items" :key="index" class="proposal-item">
        <span class="item-title">{{ item.title }}:</span>
        <span class="item-value">{{ item.value }}</span>
        <v-chip v-if="item.hint" small color="primary" class="item-hint" @click="handleAction(item)">
          {{ item.hint }}
          <v-icon v-if="item.action" size="12" class="ml-2">$FIconUpRight3PFill</v-icon>
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
class ProposalDetail extends Vue {
  @Prop() proposal!: API.Proposal;

  get meta() {
    return {
      title: this.proposal.title,
    };
  }

  get items() {
    const items = this.proposal.items.map((x) => {
      return {
        title: x.key,
        value: x.value,
        hint: x.hint,
        action: x.action,
      };
    });

    return [
      {
        title: "action",
        value: this.proposal.action,
      },
      ...items,
    ];
  }

  handleAction(item) {
    if (item.action) {
      window.open(item.action, "_blank");
    }
  }
}
export default ProposalDetail;
</script>

<style lang="scss" scoped>
.proposal-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}

.proposal-items {
  font-size: 14px;
  line-height: 17px;

  .proposal-item {
    line-height: 24px;
    margin-bottom: 24px;

    .item-hint {
      font-size: 12px;
    }
  }
}
</style>
