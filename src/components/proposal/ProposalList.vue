<template>
  <div class="proposal-list">
    <proposal-item v-for="(item, index) in proposals" :key="index" :proposal="item" @click.native="handleClick(item)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProposalItem from "./ProposalItem.vue";

@Component({
  components: {
    ProposalItem,
  },
})
class ProposalList extends Vue {
  proposals = [
    {
      title: "#91 Incentivizing DAO participation: Ideas and Strategies",
      time: "2 days ago",
      product: "Pando Lake",
      state: "active",
    },
    {
      title: "#91 Incentivizing DAO participation: Ideas and Strategies",
      time: "2 days ago",
      product: "Pando Lake",
      state: "active",
    },
    {
      title: "#91 Incentivizing DAO participation: Ideas and Strategies",
      time: "2 days ago",
      product: "Pando Lake",
      state: "closed",
    },
  ];

  handleClick(item) {
    this.$router.push({ name: "proposal-id", params: {} });
  }
}
export default ProposalList;
</script>
