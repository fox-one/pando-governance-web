import { MutationTree } from "vuex/types/index";
import { MutationTypes } from "./types";

const state = () => ({
  initing: true,
  settings: { dark: false },
});

const mutations: MutationTree<State.App> = {
  [MutationTypes.SET_INITING](state, value) {
    state.initing = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
