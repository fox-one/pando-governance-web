<template>
  <span class="proposal-kind-item" :class="{ 'proposal-kind-item--active': active }">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
class ProposalKindItem extends Vue {
  @Prop() text;

  @Prop() active;
}
export default ProposalKindItem;
</script>

<style lang="scss" scoped>
.proposal-kind-item {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  &--active {
    background: var(--v-greyscale_6-base);
  }
}
</style>
