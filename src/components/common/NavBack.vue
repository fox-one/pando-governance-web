<template>
  <f-panel tile padding="0" class="nav-back-wrapper">
    <span class="nav-back" @click="handleBack">
      <v-icon size="16">
        $FIconChevronLeft4P
      </v-icon>
    </span>
  </f-panel>
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

.nav-back-wrapper {
  z-index: 5;
}
</style>
