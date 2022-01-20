<template>
  <div class="proposal-detail-layout">
    <div v-if="isMobile">
      <div class="mb-6">
        <slot name="detail" />
      </div>
      <div class="mb-6">
        <slot name="brief" />
      </div>
      <div class="mb-6">
        <slot name="result" />
      </div>
      <div class="mb-6">
        <slot name="vote" />
      </div>
    </div>
    <v-layout v-else>
      <div class="left-side">
        <slot name="brief" />
      </div>
      <v-flex class="px-8">
        <slot name="detail" />
      </v-flex>
      <div class="right-side">
        <slot name="result" />
        <div class="mt-6">
          <slot name="vote" />
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class ProposalDetailPageLayout extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }
}
export default ProposalDetailPageLayout;
</script>
