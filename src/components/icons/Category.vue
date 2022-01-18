<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="9" rx="4.5" :fill="colors[0]" />
    <rect y="11" width="9" height="9" rx="4.5" :fill="colors[0]" />
    <rect x="11" width="9" height="9" rx="4.5" :fill="colors[0]" />
    <rect x="11" y="11" width="9" height="9" rx="4.5" :fill="colors[0]" />
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
