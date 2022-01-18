<template>
  <div class="contacts">
    <v-icon v-for="(item, index) in contacts" :key="index" class="contact-item">
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
      },
      {
        icon: "$FIconDiscordFill",
      },
      {
        icon: "$FIconTelegramFill",
      },
      {
        icon: "$FIconMixinFill",
      },
      {
        icon: "$FIconRedditFill",
      },
    ];
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
