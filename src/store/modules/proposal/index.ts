import { ActionTypes, MutationTypes } from "./types";
import { ActionTree, MutationTree } from "vuex";

const state = () => ({
  proposals: [],
  hasNext: true,
});

const mutations: MutationTree<State.Proposal> = {
  [MutationTypes.SET_PROPOSALS](state, data) {
    state.proposals = data;
  },
  [MutationTypes.SET_HAS_NEXT](state, value) {
    state.hasNext = value;
  },
};

const actions: ActionTree<State.Proposal, any> = {
  async [ActionTypes.LOAD_PROPOSALS]({ commit, state }, { reload = false, app_id }) {
    const params = { limit: 50, offset: "0", app_id };

    if (!reload && state.hasNext) {
      params.offset = state.proposals.length + "";
    }

    if (reload) {
      commit(MutationTypes.SET_PROPOSALS, []);
    }

    const data = await this.$apis.getProposals(params);
    const proposals = data.data.proposals;

    if (reload) {
      commit(MutationTypes.SET_PROPOSALS, proposals);
    } else {
      commit(MutationTypes.SET_PROPOSALS, [...state.proposals, ...proposals]);
    }

    commit(MutationTypes.SET_HAS_NEXT, data.data.proposals.length > 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
