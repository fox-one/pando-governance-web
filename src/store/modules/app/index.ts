import { MutationTree } from "vuex/types/index";
import { MutationTypes } from "./types";

const state = () => ({
  initing: true,
  settings: { dark: false },
  appbar: {
    title: "",
    style: "",
    show: true,
    back: false,
    extension: null,
    extensionHeight: 48,
  },
});

const mutations: MutationTree<State.App> = {
  [MutationTypes.SET_INITING](state, value) {
    state.initing = value;
  },

  [MutationTypes.SET_APPBAR](state, data) {
    state.appbar = {
      title: "",
      style: "",
      show: true,
      back: true,
      extension: null,
      extensionHeight: 48,
      ...data,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
