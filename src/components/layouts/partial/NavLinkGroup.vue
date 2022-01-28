<template>
  <div>
    <v-list-group v-if="isMobile" :ripple="false" class="nav-list-group">
      <template #appendIcon>
        <v-icon size="16">$FIconChevronDown4PBold</v-icon>
      </template>
      <template #activator>
        <slot name="activator" />
      </template>

      <slot />
    </v-list-group>

    <v-menu v-else>
      <template #activator="{ on }">
        <div class="menu-activator ">
          <slot name="activator" :on="on" />
          <v-icon size="12" color="greyscale_3">$IconCollapse</v-icon>
        </div>
      </template>

      <slot />
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class NavLinkGroup extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }
}
export default NavLinkGroup;
</script>

<style lang="scss" scoped>
.nav-list-group {
  ::v-deep {
    .v-list-group__header {
      padding: 0;
    }

    .nav-link {
      font-size: 0.8em;
    }
  }
}

.menu-activator {
  display: flex;
  align-items: center;
  padding-right: 8px;
  margin-right: 8px;

  ::v-deep {
    .nav-link {
      padding-right: 4px;
      margin-right: 0px;
    }
  }
}
</style>
