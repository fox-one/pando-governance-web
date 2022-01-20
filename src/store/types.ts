import { prefix as AppPrefix, MutationTypes as AppMutationTypes } from "./modules/app/types";
import {
  prefix as ProposalPrefix,
  MutationTypes as ProposalMutationTypes,
  ActionTypes as ProposalActionTypes,
} from "./modules/proposal/types";
import {
  prefix as AuthPrefix,
  GetterTypes as AuthGetterTypes,
  MutationTypes as AuthMutationTypes,
} from "./modules/auth/types";

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
  ...getGlobalTypes(AuthMutationTypes, AuthPrefix),
};

export const GlobalActions = {
  ...getGlobalTypes(ProposalActionTypes, ProposalPrefix),
};

export const GlobalGetters = {
  ...getGlobalTypes(AuthGetterTypes, AuthPrefix),
};