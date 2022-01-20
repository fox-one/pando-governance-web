<template>
  <div class="desktop-layout">
    <app-bar />

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

@Component({
  components: {
    AppBar,
    AppFooter,
  },
})
class DesktopLayout extends Vue {}
export default DesktopLayout;
</script>
