<template>
  <v-footer v-if="show" class="app-footer">
    <v-container class="text-center">
      <contacts />

      <associats class="my-3" />

      <copyright />
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Associats from "../partial/Associats.vue";
import Copyright from "../partial/Copyright.vue";
import Contacts from "../partial/Contacts.vue";

@Component({
  components: {
    Associats,
    Copyright,
    Contacts,
  },
})
class AppFooter extends Vue {
  get show() {
    return this.$route.name === "index";
  }
}
export default AppFooter;
</script>

<style lang="scss" scoped>
.app-footer {
  border-top: 1px solid var(--v-greyscale_5-base) !important;
}

.associats {
  justify-content: center;
}
</style>
