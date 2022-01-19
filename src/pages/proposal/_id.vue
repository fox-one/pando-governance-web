<template>
  <v-container>
    <v-layout>
      <div class="left-side">
        <proposal-brief-info />
      </div>
      <v-flex class="px-8">
        <proposal-detail />
      </v-flex>
      <div class="right-side">
        <proposal-result />
        <proposal-vote-history class="mt-6" />
      </div>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProposalBriefInfo from "@/components/proposal/ProposalBriefInfo.vue";
import ProposalResult from "@/components/proposal/ProposalResult.vue";
import ProposalVoteHistory from "@/components/proposal/ProposalVoteHistory.vue";
import ProposalDetail from "@/components/proposal/ProposalDetail.vue";

@Component({
  components: {
    ProposalBriefInfo,
    ProposalResult,
    ProposalVoteHistory,
    ProposalDetail,
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
