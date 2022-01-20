<template>
  <v-app>
    <template v-if="!initing">
      <mobile-layout v-if="isMobile" />
      <desktop-layout v-else />
    </template>

    <f-loading v-else :loading="true" fullscreen />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DesktopLayout from "@/components/layouts/desktop/DesktopLayout.vue";
import MobileLayout from "@/components/layouts/mobile/MobileLayout.vue";

@Component({
  components: {
    DesktopLayout,
    MobileLayout,
  },
})
class DefaultLayout extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }

  get initing() {
    return this.$store.state.app.initing;
  }

  mounted() {
    this.$utils.app.init(this);
  }
}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
