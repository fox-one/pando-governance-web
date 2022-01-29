<template>
  <span :class="classes">
    {{ state }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
class ProposalState extends Vue {
  @Prop() state;

  @Prop({ type: Boolean, default: false }) small!: boolean;

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
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 6px 10px;
  border-radius: 8px;

  &--active {
    color: #ff681f;
    background: #ffeee6;
  }

  &--passed {
    color: #63a8b8;
    background: #f2f9fb;
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
