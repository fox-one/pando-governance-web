import { ActionTypes, MutationTypes } from "./types";
import { ActionTree, MutationTree } from "vuex";

const state = () => ({
  proposals: [],
  pagination: { has_next: true, next_cursor: "" },
});

const mutations: MutationTree<State.Proposal> = {
  [MutationTypes.SET_PROPOSALS](state, data) {
    state.proposals = data;
  },
  [MutationTypes.SET_PAGINATION](state, data) {
    state.pagination = data;
  },
};

const actions: ActionTree<State.Proposal, any> = {
  async [ActionTypes.LOAD_PROPOSALS]({ commit, state }, { reload = false }) {
    const params = { limit: 50, cursor: "" };

    if (!reload && state.pagination.has_next) {
      params.cursor = state.pagination.next_cursor;
    }

    const data = await this.$apis.getProposals(params);

    commit(MutationTypes.SET_PROPOSALS, data.data.proposals);
    commit(MutationTypes.SET_PAGINATION, data.data.pagination);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
