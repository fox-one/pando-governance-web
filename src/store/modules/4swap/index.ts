import { MutationTree, ActionTree } from "vuex/types/index";
import { ActionTypes, MutationTypes } from "./types";
import { make } from "vuex-pathify";

const state = (): State.FSwap => ({
  assets: [],
  pairs: [],
});

const mutations: MutationTree<State.FSwap> = {
  ...make.mutations(state),
};

const actions: ActionTree<State.Proposal, any> = {
  async [ActionTypes.LOAD_ASSETS]({ commit }) {
    const resp = await this.$apis.ListAssetsJSON({});

    commit(MutationTypes.SET_ASSETS, resp?.assets ?? []);
  },

  async [ActionTypes.LOAD_PAIRS]({ commit }) {
    const resp = await this.$apis.ListPairsJSON({});

    commit(MutationTypes.SET_PAIRS, resp?.pairs ?? []);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
