<template>
  <div>
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
class MobileLayout extends Vue {}
export default MobileLayout;
</script>
