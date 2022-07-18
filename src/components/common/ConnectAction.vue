<template>
  <div>
    <slot v-if="!logged" name="action" :on="{ click: handleOpenAuth }">
      <f-button color="primary" @click="handleOpenAuth">
        {{ $t("connect") }}
      </f-button>
    </slot>

    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GlobalGetters } from "~/store/types";

@Component
class ConnectAction extends Vue {
  get logged() {
    return this.$store.getters[GlobalGetters.LOGGED];
  }

  handleOpenAuth() {
    this.$utils.account.openAuth(this);
  }
}
export default ConnectAction;
</script>
