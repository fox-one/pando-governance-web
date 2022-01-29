<template>
  <v-container>
    <div class="home-brands">
      <div class="brand-image">
        <v-img src="/images/brand.png" :max-width="sloganWidth" />
      </div>

      <div class="slogan mt-8">Welcome to check Pando governance</div>
    </div>

    <v-layout class="home-content">
      <div v-if="isMobile" class="home-tabs">
        <product-tabs :current="currentTab" />
      </div>
      <div v-else class="home-sidebar">
        <product-sidebar :current.sync="currentTab" />
      </div>

      <v-flex class="home-list">
        <proposal-list :current="currentTab" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductSidebar from "@/components/home/ProductSidebar.vue";
import ProductTabs from "@/components/home/ProductTabs.vue";
import ProposalList from "@/components/proposal/ProposalList.vue";

@Component({
  components: {
    ProductSidebar,
    ProductTabs,
    ProposalList,
  },
})
class IndexPage extends Vue {
  currentTab = "";

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
  margin-top: 64px;
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
