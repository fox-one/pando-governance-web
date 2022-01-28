<template>
  <div class="proposal-list">
    <proposal-item v-for="(item, index) in proposals" :key="index" :proposal="item" @click.native="handleClick(item)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProposalItem from "./ProposalItem.vue";
import { getProposalStatusMeta } from "@/enums";

@Component({
  components: {
    ProposalItem,
  },
})
class ProposalList extends Vue {
  get proposals() {
    const proposals: API.Proposal[] = this.$store.state.proposal.proposals;
    const apps: API.App[] = this.$store.state.apps.apps;

    return proposals.map((x) => {
      const app = apps.find((app) => app.id === x.app_id);
      const statusMeta = getProposalStatusMeta(x.status);

      return {
        id: x.id,
        title: x.title,
        time: this.$utils.time.toRelative(x.created_at),
        product: app?.name ?? "",
        state: this.$t(statusMeta.text),
      };
    });
  }

  handleClick(item) {
    this.$router.push({ name: "proposal-id", params: { id: item.id } });
  }
}
export default ProposalList;
</script>
