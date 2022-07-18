<template>
  <div class="rules">
    <div class="label">!!Rules</div>

    <ul class="items mt-4">
      <li class="item">A fee will be charged for each request.</li>
      <li class="item">
        The request will be processed and results informed within 3 business days.
      </li>
      <li class="item">If the request is denied, you will receive a full refund.</li>
      <li class="item">If you cannot find the token you want to add, please contact us.</li>
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
