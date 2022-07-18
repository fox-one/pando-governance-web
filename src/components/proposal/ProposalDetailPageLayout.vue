<template>
  <div class="proposal-detail-layout">
    <div v-if="isMobile">
      <div class="mb-6">
        <slot name="brief" />
      </div>
      <div class="mb-6">
        <slot name="result" />
      </div>
      <div class="mb-6">
        <slot name="detail" />
      </div>
      <div class="mb-6">
        <slot name="vote" />
      </div>
    </div>
    <v-layout v-else>
      <v-flex class="px-8">
        <slot name="detail" />
        <div class="mt-6">
          <slot name="vote" />
        </div>
      </v-flex>
      <div class="right-side">
        <div class="sticky-top">
          <slot name="brief" />
          <div class="mt-6">
            <slot name="result" />
          </div>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBack from "@/components/common/NavBack.vue";

@Component({
  components: {
    NavBack,
  },
})
class ProposalDetailPageLayout extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }
}
export default ProposalDetailPageLayout;
</script>

<style lang="scss" scoped>
.left-side,
.right-side {
  flex: 0 0 320px;
}
</style>
