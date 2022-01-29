<template>
  <v-container>
    <f-loading v-if="loading" loading fullscreen />
    <template v-else>
      <proposal-detail-page-layout v-if="proposal">
        <template #detail>
          <nav-back v-if="!isMobile" class="mb-4 sticky-top" />
          <proposal-detail :proposal="proposal" />
        </template>
        <template #brief>
          <proposal-brief-info :proposal="proposal" />
        </template>
        <template #result>
          <proposal-result :proposal="proposal" />
        </template>
        <template #vote>
          <proposal-vote-history :proposal="proposal" />
        </template>
      </proposal-detail-page-layout>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProposalBriefInfo from "@/components/proposal/ProposalBriefInfo.vue";
import ProposalResult from "@/components/proposal/ProposalResult.vue";
import ProposalVoteHistory from "@/components/proposal/ProposalVoteHistory.vue";
import ProposalDetail from "@/components/proposal/ProposalDetail.vue";
import ProposalDetailPageLayout from "@/components/proposal/ProposalDetailPageLayout.vue";
import NavBack from "@/components/common/NavBack.vue";

@Component({
  components: {
    NavBack,
    ProposalBriefInfo,
    ProposalResult,
    ProposalVoteHistory,
    ProposalDetail,
    ProposalDetailPageLayout,
  },
})
class ProposalDetailPage extends Vue {
  loading = false;

  proposal: API.Proposal | null = null;

  get id() {
    return this.$route.params.id;
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }

  mounted() {
    this.requestProposal();
  }

  async requestProposal() {
    this.loading = true;

    try {
      const resp = await this.$apis.getProposal(this.id);

      this.loading = false;
      this.proposal = resp.data;
    } catch (error) {
      this.$utils.helper.errorHandler(this, error);
    }
  }
}
export default ProposalDetailPage;
</script>

<style lang="scss" scoped>
.left-side,
.right-side {
  min-width: 320px;
  max-width: 320px;
}
</style>
