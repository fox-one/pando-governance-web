import Vue from "vue";
import { GlobalActions, GlobalMutations } from "@/store/types";
import { sync } from "./account";

export async function init(vm: Vue) {
  vm.$store.commit(GlobalMutations.SET_INITING, true);

  await sync(vm);

  // app data
  try {
    await Promise.all([
      vm.$store.dispatch(GlobalActions.LOAD_APPS),
      vm.$store.dispatch(GlobalActions.LOAD_ASSETS),
      vm.$store.dispatch(GlobalActions.LOAD_PAIRS),
    ]);
  } catch (error) {
    vm.$utils.helper.errorHandler(vm, error);
  }

  // account data
  try {
    await Promise.all([vm.$store.dispatch(GlobalActions.LOAD_PROFILE)]);
  } catch (error) {
    // ignore
  }

  vm.$store.commit(GlobalMutations.SET_INITING, false);
}
