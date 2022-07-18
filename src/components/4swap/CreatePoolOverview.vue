<template>
  <div class="overview-card">
    <div class="label">Info</div>
    <div>
      <information-item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GlobalGetters } from "~/store/types";

@Component
class CreatePoolOverview extends Vue {
  get meta() {
    const id = "a753e0eb-3010-4c4a-a7b2-a7bda4063f62";
    const dapp = this.$store.getters[GlobalGetters.GET_APP_BY_ID](id);
    const profile = this.$store.state.auth.profile;

    return {
      name: dapp.name,
      avatar: dapp.avatar,
      author: profile?.full_name ?? "",
      authorAvatar: profile?.avatar_url ?? "",
    };
  }

  get items() {
    return [
      { title: "DApp", value: this.meta.name, logo: this.meta.avatar },
      this.meta.author && { title: "Author", value: this.meta.author, logo: this.meta.authorAvatar },
    ].filter((v) => !!v);
  }
}
export default CreatePoolOverview;
</script>

<style lang="scss" scoped>
.overview-card {
  background: var(--v-greyscale_6-base);
  border-radius: 8px;
  padding: 16px 16px 1px;

  .label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
