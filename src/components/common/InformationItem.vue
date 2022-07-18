<template>
  <div class="information-item">
    <div class="item-title">{{ item.title }}</div>
    <div class="item-value">
      <v-avatar v-if="item.logo" :size="16" class="mr-1">
        <v-img :src="item.logo" />
      </v-avatar>

      <f-render :nodes="item.value" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class InformationItem extends Vue {
  @Prop() item;
}
export default InformationItem;
</script>

<style lang="scss" scoped>
.information-item {
  margin: 24px 0;
  display: flex;

  .item-title {
    flex: 1;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--v-greyscale_3-base);
  }

  .item-value {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    word-break: break-all;
  }
}
</style>
