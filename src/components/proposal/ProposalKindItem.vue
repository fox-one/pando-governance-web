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
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  border: 1px solid var(--v-greyscale_6-base);
  color: var(--v-greyscale_3-base);
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }

  &--active {
    background: var(--v-greyscale_6-base);
    border: 1px solid var(--v-greyscale_6-base);
    color: var(--v-greyscale_1-base);
  }
}
</style>
