import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";
import modules from "./modules";
import createPersistedState from "vuex-persistedstate";

// options
pathify.options.mapping = "standard";
pathify.options.deep = 2;

export default function() {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules,
    plugins: [pathify.plugin, createPersistedState({ key: "vuex", paths: ["auth"] })],
  });
}
