<template>
  <f-button color="primary" class="gover-btn" @click="handleClick">
    {{ item.text }}
  </f-button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class ProposalAction extends Vue {
  @Prop() item;

  handleClick() {
    const action = this.item.action;

    if (action && typeof action === "function") {
      action();
    }
  }
}
export default ProposalAction;
</script>
