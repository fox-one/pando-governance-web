<template>
  <span class="copyright">Copyright © 2021 Pando</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Copyright extends Vue {}
export default Copyright;
</script>

<style lang="scss" scoped>
.copyright {
  font-size: 12px;
  line-height: 15px;
  color: var(--v-greyscale_3-base);
}
</style>
