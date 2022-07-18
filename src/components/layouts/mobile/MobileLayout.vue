<template>
  <div class="mobile-layout">
    <app-bar-home v-if="isHome" @toggle="handleToggle" />
    <app-bar-common v-else />

    <app-side-nav v-model="nav" />

    <v-main>
      <nuxt />
    </v-main>

    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBarHome from "./AppBarHome.vue";
import AppBarCommon from "./AppBarCommon.vue";
import AppFooter from "./AppFooter.vue";
import AppSideNav from "./AppSideNav.vue";

@Component({
  components: {
    AppBarHome,
    AppBarCommon,
    AppFooter,
    AppSideNav,
  },
})
class MobileLayout extends Vue {
  nav = false;

  get isHome() {
    return this.$route.name === "index";
  }

  handleToggle() {
    this.nav = !this.nav;
  }
}
export default MobileLayout;
</script>
