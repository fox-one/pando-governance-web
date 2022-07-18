<template>
  <div class="desktop-layout">
    <app-bar-home v-if="isHome" />
    <app-bar-common v-else />

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

@Component({
  components: {
    AppBarHome,
    AppBarCommon,
    AppFooter,
  },
})
class DesktopLayout extends Vue {
  get isHome() {
    return this.$route.name === "index";
  }
}
export default DesktopLayout;
</script>
