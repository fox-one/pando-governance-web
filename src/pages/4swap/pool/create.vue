<template>
  <v-container>
    <create-pool-overview />
    <create-pool-form class="mt-8" />
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import CreatePoolForm from "@/components/4swap/CreatePoolForm.vue";
import CreatePoolOverview from "@/components/4swap/CreatePoolOverview.vue";
import mixins from "@/mixins";

@Component({
  components: {
    CreatePoolOverview,
    CreatePoolForm,
  },
})
class CreatePoolPage extends Mixins(mixins.Page) {
  get title() {
    return this.$t("pool.create") as string;
  }
}
export default CreatePoolPage;
</script>
