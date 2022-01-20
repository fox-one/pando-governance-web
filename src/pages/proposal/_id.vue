<template>
  <v-container>
    <proposal-detail-page-layout>
      <template #detail>
        <proposal-detail />
      </template>
      <template #brief>
        <proposal-brief-info />
      </template>
      <template #result>
        <proposal-result />
      </template>
      <template #vote>
        <proposal-vote-history />
      </template>
    </proposal-detail-page-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProposalBriefInfo from "@/components/proposal/ProposalBriefInfo.vue";
import ProposalResult from "@/components/proposal/ProposalResult.vue";
import ProposalVoteHistory from "@/components/proposal/ProposalVoteHistory.vue";
import ProposalDetail from "@/components/proposal/ProposalDetail.vue";
import ProposalDetailPageLayout from "~/components/proposal/ProposalDetailPageLayout.vue";

@Component({
  components: {
    ProposalBriefInfo,
    ProposalResult,
    ProposalVoteHistory,
    ProposalDetail,
    ProposalDetailPageLayout,
  },
})
class ProposalDetailPage extends Vue {}
export default ProposalDetailPage;
</script>

<style lang="scss" scoped>
.left-side,
.right-side {
  min-width: 320px;
  max-width: 320px;
}
</style>
