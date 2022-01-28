import Vue from "vue";
import { GlobalActions, GlobalMutations } from "@/store/types";

export async function init(vm: Vue) {
  vm.$store.commit(GlobalMutations.SET_INITING, true);

  try {
    await Promise.all([
      vm.$store.dispatch(GlobalActions.LOAD_PROPOSALS, { reload: true }),
      vm.$store.dispatch(GlobalActions.LOAD_APPS),
    ]);
  } catch (error) {
    vm.$utils.helper.errorHandler(vm, error);
  }

  vm.$store.commit(GlobalMutations.SET_INITING, false);
}
