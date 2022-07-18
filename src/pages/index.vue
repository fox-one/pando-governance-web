<template>
  <v-container>
    <div class="home-brands">
      <div class="brand-image">
        <v-img src="/images/brand.png" :max-width="sloganWidth" />
      </div>

      <div class="slogan mt-8">
        {{ $t("slogn") }}
      </div>
    </div>

    <v-layout class="home-content">
      <div v-if="isMobile" class="home-tabs">
        <product-tabs :current.sync="currentTab" :current-kind.sync="currentKind" />
      </div>
      <div v-else class="home-sidebar">
        <product-sidebar :current.sync="currentTab" :current-kind.sync="currentKind" />
      </div>

      <v-flex class="home-list">
        <proposal-kinds :current-tab="currentTab" :current-kind.sync="currentKind" />
        <proposal-list v-if="isProposalList" :current="currentTab" />
        <member-list v-else :current-tab="currentTab" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import ProductSidebar from "@/components/home/ProductSidebar.vue";
import ProductTabs from "@/components/home/ProductTabs.vue";
import ProposalList from "@/components/proposal/ProposalList.vue";
import ProposalKinds from "@/components/proposal/ProposalKinds.vue";
import MemberList from "@/components/proposal/MemberList.vue";
import mixins from "@/mixins";
import { Sync } from "vuex-pathify";

@Component({
  components: {
    ProductSidebar,
    ProductTabs,
    ProposalList,
    ProposalKinds,
    MemberList,
  },
})
class IndexPage extends Mixins(mixins.Page) {
  @Sync("page/index@currentTab") currentTab!: string;

  @Sync("page/index@currentKind") currentKind!: string;

  get isProposalList() {
    return this.currentKind === "proposals";
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }

  get sloganWidth() {
    return this.isMobile ? "196" : "290";
  }
}
export default IndexPage;
</script>

<style lang="scss" scoped>
.brand-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slogan {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}

.home-sidebar {
  width: 320px;
  min-width: 320px;
  max-width: 320px;
}

.home-content {
  margin-top: 96px;
}

.home-list {
  padding: 0 32px;
}

.mobile-layout {
  .slogan {
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
  }

  .home-content {
    margin-top: 32px;
    flex-direction: column;
  }

  .home-list {
    padding: 0;
  }
}
</style>
