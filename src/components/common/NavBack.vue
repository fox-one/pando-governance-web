<template>
  <span class="nav-back" @click="handleBack">
    <v-icon size="16">
      $FIconChevronLeft4PBold
    </v-icon>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class NavBack extends Vue {
  handleBack() {
    this.$router.back();
  }
}
export default NavBack;
</script>

<style lang="scss" scoped>
.nav-back {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--v-greyscale_6-base);
}
</style>
