<template>
  <v-container>
    <div class="home-brands">
      <div class="brand-image">
        <v-img src="/images/brand.png" max-width="290" />
      </div>

      <div class="slogan mt-8">Welcome to check Pando governance</div>
    </div>

    <v-layout class="home-content">
      <div class="home-sidebar">
        <product-sidebar />
      </div>

      <v-flex class="px-8">
        <proposal-list />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductSidebar from "@/components/home/ProductSidebar.vue";
import ProposalList from "@/components/proposal/ProposalList.vue";

@Component({
  components: {
    ProductSidebar,
    ProposalList,
  },
})
class IndexPage extends Vue {}
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
</style>
