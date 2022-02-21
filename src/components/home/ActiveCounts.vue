<template>
  <span v-if="counts > 0" class="active-counts">{{ counts }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class ActiveCounts extends Vue {
  @Prop() counts!: number;
}
export default ActiveCounts;
</script>

<style lang="scss" scoped>
.active-counts {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ff681f;
  width: 20px;
  height: 20px;
  left: 184px;
  top: 119px;
  background: #ffeee5;
  border-radius: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
