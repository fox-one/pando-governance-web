<template>
  <v-app>
    <desktop-layout />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DesktopLayout from "@/components/layouts/desktop/DesktopLayout.vue";

@Component({
  components: {
    DesktopLayout,
  },
})
class DefaultLayout extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }
}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
