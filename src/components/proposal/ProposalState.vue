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

  get classes() {
    return {
      "proposal-state": true,
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

  &--closed {
    color: #63a8b8;
    background: #f2f9fb;
  }
}
</style>
