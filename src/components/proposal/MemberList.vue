<template>
  <div class="member-list">
    <member-item v-for="(member, index) in members" :key="index" :member="member" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { GlobalGetters } from "@/store/types";
import MemberItem from "./MemberItem.vue";

@Component({
  components: {
    MemberItem,
  },
})
class MemberList extends Vue {
  @Prop() currentTab;

  get members() {
    const getAppById = this.$store.getters[GlobalGetters.GET_APP_BY_ID];
    const app: API.App = getAppById(this.currentTab);

    return app?.members ?? [];
  }
}
export default MemberList;
</script>
