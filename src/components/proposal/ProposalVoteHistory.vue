<template>
  <div class="vote-history">
    <div class="vote-history__title">
      {{ $t("history") }}
    </div>

    <div class="vote-history__items">
      <v-data-table
        :headers="headers"
        :items="items"
        :mobile-breakpoint="0"
        hide-default-footer
        disable-pagination
        class="history-table"
      >
        <template #[`item.node`]="{ item }">
          <v-avatar v-if="item.logo" :size="16">
            <v-img :src="item.logo" />
          </v-avatar>
          <span class="node-field">{{ item.node }}</span>
        </template>
        <template #[`item.option`]="{ item }">
          <span class="option-field">{{ item.option }}</span>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GlobalGetters } from "@/store/types";

@Component
class ProposalVoteHistory extends Vue {
  @Prop() proposal!: API.Proposal;

  get headers() {
    return [
      {
        text: this.$t("node"),
        value: "node",
        sortable: false,
      },
      {
        text: this.$t("option"),
        value: "option",
        sortable: false,
        align: "right",
      },
    ];
  }

  get items() {
    const getAppById = this.$store.getters[GlobalGetters.GET_APP_BY_ID];
    const app: API.App = getAppById(this.proposal.app_id);
    const votes = this.proposal.votes;

    return app.members
      .map((x) => {
        const isVoted = votes.findIndex((v) => v.id === x.id) > -1;

        return {
          isVoted,
          logo: x.avatar,
          node: x.name,
          option: isVoted ? this.$t("agreed") : this.$t("not-voted"),
        };
      })
      .sort((a, b) => {
        const getIndex = (x) => (x.isVoted ? 0 : 1);

        return getIndex(a) > getIndex(b) ? 1 : -1;
      });
  }
}
export default ProposalVoteHistory;
</script>

<style lang="scss" scoped>
.vote-history {
  border: 1px solid var(--v-greyscale_5-base);
  border-radius: 8px;

  &__title {
    padding: 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
}

.history-table {
  ::v-deep {
    td {
      border: none !important;
    }

    > .v-data-table__wrapper > table > thead > tr:last-child > th {
      border-bottom: 1px solid var(--v-greyscale_5-base);
      border-top: 1px solid var(--v-greyscale_5-base);
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      height: 32px;
    }
  }
}

.option-field {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.node-field {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: var(--v-greyscale_3-base);
}
</style>
