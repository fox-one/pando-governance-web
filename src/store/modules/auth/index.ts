import { MutationTree, GetterTree, ActionTree } from "vuex";
import { make } from "vuex-pathify";
import { GetterTypes, MutationTypes, ActionTypes } from "./types";

const state = (): State.Auth => ({
  token: "",
  channel: "",
  profile: null,
});

const getters: GetterTree<State.Auth, any> = {
  [GetterTypes.LOGGED](state) {
    return Boolean(state.token);
  },
};

const mutations: MutationTree<State.Auth> = {
  ...make.mutations(state),
  [MutationTypes.SET_OAUTH_INFO](state, data) {
    state.token = data.token;
    state.channel = data.channel;
  },
  [MutationTypes.CLEAR_AUTH](state) {
    state.token = "";
    state.channel = "";
  },
};

const actions: ActionTree<State.Auth, any> = {
  async [ActionTypes.LOAD_PROFILE]({ commit }) {
    const resp = await this.$apis.getProfile();

    commit("SET_PROFILE", resp.data);
  },
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
