<template>
  <v-list class="nav-links" :class="{ 'nav-links--mobile': isMobile }">
    <template v-for="(link, index) in links">
      <nav-link-group v-if="link.items" :key="index">
        <template #activator="{ on }">
          <div v-on="on">
            <nav-link :nav="link">
              <template #append>
                <v-icon size="12" color="greyscale_3">$IconCollapse</v-icon>
              </template>
            </nav-link>
          </div>
        </template>

        <f-panel padding="0">
          <nav-link v-for="(item, index2) in link.items" :key="index2" :nav="item" />
        </f-panel>
      </nav-link-group>

      <f-divider v-else-if="link === 'divider'" class="my-4" />

      <nav-link v-else :nav="link" />
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VMenu, VListGroup } from "vuetify/lib";
import NavLinkGroup from "./NavLinkGroup.vue";
import NavLink from "./NavLink.vue";

@Component({
  components: {
    VMenu,
    VListGroup,
    NavLink,
    NavLinkGroup,
  },
})
class NavLinks extends Vue {
  get links() {
    return [
      {
        title: "Products",
        items: [
          {
            title: "Pando Rings",
            href: "https://rings.pando.im/",
          },
          {
            title: "Pando Leaf",
            href: "https://leaf.pando.im/",
          },
          {
            title: "Pando Lake",
            href: "https://lake.pando.im/",
          },
          {
            title: "Fennec",
            href: "https://pando.im/fennec",
          },
        ],
      },
      this.isMobile && "divider",
      {
        title: this.$t("developers"),
        href: "https://docs.pando.im/",
      },
      {
        title: this.$t("governance"),
        active: true,
      },
    ].filter((v) => !!v);
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }
}
export default NavLinks;
</script>

<style lang="scss" scoped>
.nav-links {
  display: flex;
}

.mobile-layout {
  .nav-links {
    display: block;
  }
}

.nav-links--mobile {
  .nav-link {
    padding: 16px 0;
  }
}
</style>
