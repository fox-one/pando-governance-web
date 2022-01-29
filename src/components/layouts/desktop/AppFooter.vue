<template>
  <v-footer class="app-footer">
    <v-container>
      <v-layout>
        <div>
          <contacts class="mb-6" />
          <copyright />
        </div>
        <v-spacer />
        <associats />
      </v-layout>
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
class AppBar extends Vue {}
export default AppBar;
</script>

<style lang="scss" scoped>
.app-footer {
  border-top: 1px solid var(--v-greyscale_5-base) !important;
}
</style>
