<template>
  <div class="vote-history">
    <div class="vote-history__title">
      History
    </div>

    <div class="vote-history__items">
      <v-data-table :headers="headers" :items="items" hide-default-footer disable-pagination class="history-table">
        <template #[`item.node`]="{ item }">
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
import { Component, Vue } from "vue-property-decorator";

@Component
class ProposalVoteHistory extends Vue {
  get headers() {
    return [
      {
        text: "Node",
        value: "node",
        sortable: false,
      },
      {
        text: "Option",
        value: "option",
        sortable: false,
        align: "right",
      },
    ];
  }

  get items() {
    return [
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
      {
        node: "lehigh-2.hotot.org:7239",
        option: "Agreed",
      },
    ];
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
