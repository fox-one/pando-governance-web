<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="8" height="8" rx="4" fill="#CCCCCC" />
    <rect x="1" y="11" width="8" height="8" rx="4" fill="#CCCCCC" />
    <rect x="11" y="1" width="8" height="8" rx="4" fill="#CCCCCC" />
    <rect x="11" y="11" width="8" height="8" rx="4" fill="#CCCCCC" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Category extends Vue {
  get colors() {
    return [this.$vuetify.theme.currentTheme.greyscale_4];
  }
}
export default Category;
</script>
