<template>
  <div class="associats">
    <span v-for="(item, index) in associats" :key="index" class="associat-item">
      {{ item.text }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Associats extends Vue {
  get associats() {
    return [
      {
        text: this.$t("team"),
      },
      {
        text: this.$t("blog"),
      },
      {
        text: this.$t("document"),
      },
    ];
  }
}
export default Associats;
</script>

<style lang="scss" scoped>
.associats {
  display: flex;
  align-items: flex-end;
}

.associat-item {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  padding: 0 6px;
  margin-right: 0 6px;
  cursor: pointer;
}
</style>
