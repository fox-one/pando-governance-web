<template>
  <v-navigation-drawer app v-bind="$attrs" v-on="$listeners">
    <div class="pa-4">
      <v-icon size="32">$IconPandoLogo</v-icon>

      <nav-links />
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavLinks from "../partial/NavLinks.vue";

@Component({
  components: {
    NavLinks,
  },
})
class AppSideNav extends Vue {}
export default AppSideNav;
</script>
