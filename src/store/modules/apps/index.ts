import { ActionTypes, MutationTypes } from "./types";
import { ActionTree, MutationTree } from "vuex";

const state = () => ({
  apps: [],
});

const mutations: MutationTree<any> = {
  [MutationTypes.SET_APPS](state, data) {
    state.apps = data;
  },
};

const actions: ActionTree<State.Proposal, any> = {
  async [ActionTypes.LOAD_APPS]({ commit }) {
    const resp = await this.$apis.getApps();

    commit(MutationTypes.SET_APPS, resp.data.apps);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
