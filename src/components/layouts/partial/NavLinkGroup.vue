<template>
  <div>
    <v-list-group v-if="isMobile" :ripple="false" append-icon class="nav-list-group">
      <template #activator>
        <slot name="activator" />
      </template>

      <div class="nav-list-group--content">
        <slot />
      </div>
    </v-list-group>

    <v-menu v-else>
      <template #activator="{ on }">
        <div class="menu-activator">
          <slot name="activator" :on="on" />
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
      min-height: auto;

      &::before {
        display: none;
      }
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
