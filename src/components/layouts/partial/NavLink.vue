<template>
  <div class="nav-link" :class="{ 'nav-link--active': nav.active }" @click="handleClick">
    <span>{{ nav.title }}</span>
    <slot name="append" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class NavLink extends Vue {
  @Prop() nav;

  handleClick() {
    if (this.nav.href) {
      window.location.href = this.nav.href;
    }
  }
}
export default NavLink;
</script>

<style lang="scss" scoped>
.nav-link {
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 16px;
  cursor: pointer;
  color: var(--v-greyscale_3-base);

  &:hover {
    color: var(--v-greyscale_1-base);
  }
}

.nav-link--active {
  color: var(--v-greyscale_1-base);
  font-weight: 600;
}
</style>
