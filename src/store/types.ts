import { prefix as AppPrefix, MutationTypes as AppMutationTypes } from "./modules/app/types";
import {
  prefix as AppsPrefix,
  GetterTypes as AppsGetterTypes,
  MutationTypes as AppsMutationTypes,
  ActionTypes as AppsActionTypes,
} from "./modules/apps/types";
import {
  prefix as ProposalPrefix,
  MutationTypes as ProposalMutationTypes,
  ActionTypes as ProposalActionTypes,
} from "./modules/proposal/types";
import {
  prefix as AuthPrefix,
  GetterTypes as AuthGetterTypes,
  MutationTypes as AuthMutationTypes,
  ActionTypes as AuthActionTypes,
} from "./modules/auth/types";
import {
  prefix as FSwapPrefix,
  ActionTypes as FSwapActionTypes,
  MutationTypes as FSwapMutationTypes,
} from "./modules/4swap/types";

function getGlobalTypes<T>(types: T, prefix: string) {
  return Object.keys(types).reduce(
    (m, k) => ({
      [k]: `${prefix}${types[k]}`,
      ...m,
    }),
    {},
  ) as { [k in keyof T]: string };
}

export const GlobalMutations = {
  ...getGlobalTypes(ProposalMutationTypes, ProposalPrefix),
  ...getGlobalTypes(AppMutationTypes, AppPrefix),
  ...getGlobalTypes(AppsMutationTypes, AppsPrefix),
  ...getGlobalTypes(AuthMutationTypes, AuthPrefix),
  ...getGlobalTypes(AuthMutationTypes, AuthPrefix),
  ...getGlobalTypes(FSwapMutationTypes, FSwapPrefix),
};

export const GlobalActions = {
  ...getGlobalTypes(ProposalActionTypes, ProposalPrefix),
  ...getGlobalTypes(AppsActionTypes, AppsPrefix),
  ...getGlobalTypes(FSwapActionTypes, FSwapPrefix),
  ...getGlobalTypes(AuthActionTypes, AuthPrefix),
};

export const GlobalGetters = {
  ...getGlobalTypes(AuthGetterTypes, AuthPrefix),
  ...getGlobalTypes(AppsGetterTypes, AppsPrefix),
};
