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

    const assets = resp.assets.map((asset) => {
      const chainAsset = resp.assets.find((x) => x.assetId === asset.chainId);

      return { ...asset, chainLogo: chainAsset?.logo ?? "" };
    });

    commit(MutationTypes.SET_ASSETS, assets);
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
