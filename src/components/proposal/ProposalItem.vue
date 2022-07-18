<template>
  <v-layout class="proposal-item">
    <v-flex>
      <div class="proposal-item__title">{{ proposal.title }}</div>
      <div class="mt-3 proposal-item__subtitle">
        <proposal-state :state="proposal.state" />
        <span>{{ proposal.time }}</span>
        <span>{{ proposal.product }}</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProposalState from "./ProposalState.vue";

@Component({
  components: {
    ProposalState,
  },
})
class ProposalItem extends Vue {
  @Prop() proposal;
}
export default ProposalItem;
</script>

<style lang="scss" scoped>
.proposal-item {
  padding: 24px 0;
  border-bottom: 1px solid var(--v-greyscale_5-base);
  cursor: pointer;

  &:first-child {
    border-top: 1px solid var(--v-greyscale_5-base);
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  &__subtitle {
    font-size: 14px;
    line-height: 17px;
    color: var(--v-greyscale_3-base);

    span {
      display: inline-block;
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.mobile-layout {
  .proposal-item {
    align-items: center;

    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    &__subtitle {
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
