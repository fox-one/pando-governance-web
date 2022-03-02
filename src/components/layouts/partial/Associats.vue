<template>
  <div class="associats">
    <span v-for="(item, index) in associats" :key="index" class="associat-item" @click="handleClick(item)">
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
        text: this.$t("blog"),
        href: "https://docs.pando.im/",
      },
      {
        text: this.$t("document"),
        href: "https://docs.pando.im/blog/",
      },
    ];
  }

  handleClick(item) {
    window.open(item.href, "_blank");
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
