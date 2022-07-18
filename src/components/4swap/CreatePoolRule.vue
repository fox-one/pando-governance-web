<template>
  <div class="rules">
    <div class="label">{{ $t("rules") }}</div>

    <ul class="items mt-4">
      <li class="item">{{ $t("rules_1") }}</li>
      <li class="item">{{ $t("rules_2") }}</li>
      <li class="item">{{ $t("rules_3") }}</li>
      <li class="item">{{ $t("rules_4") }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class CreatePoolRule extends Vue {}
export default CreatePoolRule;
</script>

<style lang="scss" scoped>
.label {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}

.items {
  list-style: auto;

  li {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--v-greyscale_3-base);
  }
}
</style>
