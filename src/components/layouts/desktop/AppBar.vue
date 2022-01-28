<template>
  <f-app-bar app custom-content flat height="96">
    <v-icon size="32">$IconPandoLogo</v-icon>
    <v-spacer />
    <nav-links />
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavLinks from "../partial/NavLinks.vue";

@Component({
  components: {
    NavLinks,
  },
})
class AppBar extends Vue {}
export default AppBar;
</script>

<style lang="scss" scoped>
.f-app-bar {
  ::v-deep {
    .v-toolbar__content {
      padding: 32px;
    }
  }
}
</style>
