<template>
  <div class="member-item">
    <f-user-avatar :avatar="meta.logo" :name="meta.name" :size="48" class="member-item__avatar" />

    <v-flex>
      <div class="member-item__title">
        {{ meta.name }}
      </div>
      <div class="member-item__subtitle">
        {{ meta.id }}
      </div>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class MemberItem extends Vue {
  @Prop() member!: API.MtgMember;

  get meta() {
    return {
      logo: this.member.avatar,
      name: this.member.name,
      id: this.member.id,
    };
  }
}
export default MemberItem;
</script>

<style lang="scss" scoped>
.member-item {
  display: flex;
  align-items: center;
  padding: 32px 0;
  border-bottom: 1px solid var(--v-greyscale_5-base);

  &:first-child {
    border-top: 1px solid var(--v-greyscale_5-base);
  }

  &__avatar {
    margin-right: 16px;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    margin-bottom: 12px;
  }

  &__subtitle {
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on, "zero" on;
    color: var(--v-greyscale_3-base);
  }
}
</style>
