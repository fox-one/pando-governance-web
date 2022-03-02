<template>
  <div class="contacts">
    <v-icon v-for="(item, index) in contacts" :key="index" class="contact-item" @click="handleClick(item)">
      {{ item.icon }}
    </v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Contacts extends Vue {
  get contacts() {
    return [
      {
        icon: "$FIconTwitterFill",
        href: "https://twitter.com/pando_im",
      },
      {
        icon: "$FIconDiscordFill",
        href: "https://discord.com/invite/ek45g3Cymd",
      },
      {
        icon: "$FIconTelegramFill",
        href: "https://t.me/pandoim",
      },
      {
        icon: "$FIconRedditFill",
        href: "https://www.reddit.com/r/pando/",
      },
    ];
  }

  handleClick(item) {
    window.open(item.href, "_blank");
  }
}
export default Contacts;
</script>

<style lang="scss" scoped>
.contact-item {
  padding: 0 4px;
  margin: 0 4px;
}
</style>
