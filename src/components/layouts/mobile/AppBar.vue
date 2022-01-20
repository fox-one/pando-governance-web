<template>
  <f-app-bar flat height="56">
    <v-icon>
      $FIconMenu
    </v-icon>
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppBar extends Vue {}
export default AppBar;
</script>
