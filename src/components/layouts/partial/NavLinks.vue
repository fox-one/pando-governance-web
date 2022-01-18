<template>
  <div class="nav-links">
    <div class="nav-link">Products</div>
    <div class="nav-link">Developer</div>
    <div class="nav-link">DAO</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class NavLinks extends Vue {}
export default NavLinks;
</script>

<style lang="scss" scoped>
.nav-links {
  display: flex;

  .nav-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
    color: var(--v-greyscale_3-base);

    &:hover {
      color: var(--v-greyscale_1-base);
    }
  }

  .nav-link--active {
    color: var(--v-greyscale_1-base);
  }
}
</style>
