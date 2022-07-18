import { MutationTree } from "vuex";
import { make } from "vuex-pathify";

const state = (): State.Page => ({
  index: {
    currentKind: "proposals",
    currentTab: "all",
  },
});

const mutations: MutationTree<State.Page> = {
  ...make.mutations(state),
};

export default {
  namespaced: true,
  state,
  mutations,
};
