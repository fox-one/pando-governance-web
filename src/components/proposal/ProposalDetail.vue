<template>
  <div class="proposal-details">
    <div class="mb-4">
      <nav-back />
    </div>

    <div class="proposal-title mb-4">
      #106 New proposal “Add Pair Info”
    </div>

    <div class="proposal-items">
      <div v-for="(item, index) in items" :key="index" class="proposal-item">
        <span class="item-title">{{ item.title }}:</span>
        <span class="item-value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBack from "../common/NavBack.vue";

@Component({
  components: {
    NavBack,
  },
})
class ProposalDetail extends Vue {
  get items() {
    return [
      {
        title: "action",
        value: "ADDPair",
      },
      {
        title: "id",
        value: "ce14a993-ce14a993-ce14a993-ce14a99324rrv43tgra993-ce14a993-ce14a993-ce14a99324rrv43tgr",
      },
      {
        title: "date",
        value: "2022-01-04T10:41:20Z",
      },
      {
        title: "creator",
        value: "4swap",
      },
    ];
  }
}
export default ProposalDetail;
</script>

<style lang="scss" scoped>
.proposal-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}

.proposal-items {
  font-size: 14px;
  line-height: 17px;

  .proposal-item {
    margin-bottom: 24px;
  }
}
</style>
