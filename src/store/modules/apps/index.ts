import { ActionTypes, MutationTypes, GetterTypes } from "./types";
import { ActionTree, MutationTree, GetterTree } from "vuex";

const state = () => ({
  apps: [],
});

const getters: GetterTree<State.Apps, any> = {
  [GetterTypes.GET_APP_BY_ID](state) {
    return (id: string) => {
      return state.apps.find((x) => x.id === id);
    };
  },
};

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
  getters,
  mutations,
  actions,
};
