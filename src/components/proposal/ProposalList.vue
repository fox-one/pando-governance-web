<template>
  <div class="proposal-list">
    <list-wapper :data="proposals" :error="error" :loading="loading" @load="requestProposals">
      <proposal-item
        v-for="(item, index) in proposals"
        :key="index"
        :proposal="item"
        @click.native="handleClick(item)"
      />
    </list-wapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ProposalItem from "./ProposalItem.vue";
import ListWapper from "@/components/common/ListWarpper.vue";
import { GlobalActions } from "~/store/types";

@Component({
  components: {
    ProposalItem,
    ListWapper,
  },
})
class ProposalList extends Vue {
  @Prop() current;

  loading = false;

  error = false;

  get proposals() {
    const proposals: API.Proposal[] = this.$store.state.proposal.proposals;
    const apps: API.App[] = this.$store.state.apps.apps;

    return proposals.map((x) => {
      const app = apps.find((app) => app.id === x.app_id);

      return {
        id: x.id,
        title: x.title,
        time: this.$utils.time.toRelative(x.created_at),
        product: app?.name ?? "",
        logo: app?.avatar ?? "",
        state: x.status,
      };
    });
  }

  @Watch("current")
  handleAppChange() {
    this.requestProposals(true);
  }

  async requestProposals(reload = false) {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.error = false;

    try {
      const appId = this.current === "all" ? "" : this.current;

      await this.$store.dispatch(GlobalActions.LOAD_PROPOSALS, { reload, app_id: appId });
    } catch (error) {
      this.error = true;
      this.$utils.helper.errorHandler(this, error);
    }

    this.loading = false;
  }

  handleClick(item) {
    this.$router.push({ name: "proposal-id", params: { id: item.id } });
  }
}
export default ProposalList;
</script>
