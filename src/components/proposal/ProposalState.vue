<template>
  <span :class="classes">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getProposalStatusMeta } from "@/enums";

@Component
class ProposalState extends Vue {
  @Prop() state;

  @Prop({ type: Boolean, default: false }) small!: boolean;

  get text() {
    const statusMeta = getProposalStatusMeta(this.state);

    return this.$t(statusMeta.text);
  }

  get classes() {
    return {
      "proposal-state": true,
      "proposal-state--small": this.small,
      [`proposal-state--${this.state}`]: true,
    };
  }
}
export default ProposalState;
</script>

<style lang="scss" scoped>
.proposal-state {
  display: inline-block;
  line-height: 19px;

  &--active {
    color: #ff681f;
  }

  &--passed {
    color: #63a8b8;
  }

  &--closed {
    color: var(--v-greyscale_3-base);
  }

  &--small {
    font-size: 12px;
    line-height: 12px;
  }
}

.mobile-layout {
  .proposal-state {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
