<template>
  <f-app-bar v-if="appbar.show" custom-content app flat height="56">
    <v-layout>
      <v-icon class="mr-2" @click="handleBack">$FIconChevronLeft</v-icon>
      <v-flex class="appbar-title">{{ appbar.title }}</v-flex>
    </v-layout>
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppBarCommon extends Vue {
  get appbar() {
    return this.$store.state.app.appbar;
  }

  handleBack() {
    this.$router.back();
  }
}
export default AppBarCommon;
</script>

<style lang="scss" scoped>
.appbar-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
</style>
