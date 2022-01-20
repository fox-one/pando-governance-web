import Vue from "vue";
import { GlobalActions, GlobalMutations } from "@/store/types";

export async function init(vm: Vue) {
  vm.$store.commit(GlobalMutations.SET_INITING, true);

  await vm.$store.dispatch(GlobalActions.LOAD_PROPOSALS, { reload: true });

  vm.$store.commit(GlobalMutations.SET_INITING, false);
}
