<template>
  <v-list class="nav-links">
    <template v-for="(link, index) in links">
      <nav-link-group v-if="link.items" :key="index">
        <template #activator="{ on }">
          <div v-on="on" class="nav-link">{{ link.title }}</div>
        </template>

        <f-panel padding="0">
          <div v-for="(item, index2) in link.items" :ripple="false" :key="index2" class="nav-link">
            {{ item.title }}
          </div>
        </f-panel>
      </nav-link-group>

      <div v-else class="nav-link">
        {{ link.title }}
      </div>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VMenu, VListGroup } from "vuetify/lib";
import NavLinkGroup from "./NavLinkGroup.vue";

@Component({
  components: {
    VMenu,
    VListGroup,
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
            href: "",
          },
          {
            title: "Pando Leaf",
            href: "",
          },
          {
            title: "Pando Lake",
            href: "",
          },
          {
            title: "Fennec",
            href: "",
          },
        ],
      },
      {
        title: this.$t("developers"),
        href: "",
      },
      {
        title: this.$t("dao"),
        href: "",
      },
    ];
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mobile;
  }

  get wrapper() {
    return this.isMobile ? "v-list-group" : "v-menu";
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

.nav-link {
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  color: var(--v-greyscale_3-base);

  &:hover {
    color: var(--v-greyscale_1-base);
  }
}

.nav-link--active {
  color: var(--v-greyscale_1-base);
}
</style>
