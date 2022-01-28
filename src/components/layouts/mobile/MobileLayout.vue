<template>
  <div class="mobile-layout">
    <app-bar @toggle="handleToggle" />

    <app-side-nav v-model="nav" />

    <v-main>
      <nuxt />
    </v-main>

    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "./AppBar.vue";
import AppFooter from "./AppFooter.vue";
import AppSideNav from "./AppSideNav.vue";

@Component({
  components: {
    AppBar,
    AppFooter,
    AppSideNav,
  },
})
class MobileLayout extends Vue {
  nav = false;

  handleToggle() {
    this.nav = !this.nav;
  }
}
export default MobileLayout;
</script>
