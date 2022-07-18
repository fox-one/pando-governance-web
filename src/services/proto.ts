import { NuxtAppOptions } from "@nuxt/types";
import { client } from "twirpscript";
import { SWAP_LP_BASE } from "@/constants";
import { ListAssetsJSON, ListPairsJSON, CreateOrderJSON, FindOrderJSON } from "@/pando-protos/swaplp/v1/swaplp.pb";

export default function createProtoApis(app: NuxtAppOptions) {
  client.baseURL = SWAP_LP_BASE;

  client.use((context, next) => {
    const token = app.store?.state.auth.token;

    if (token) {
      context.headers["authorization"] = `Bearer ${token}`;
    }

    return next(context);
  });

  client.on("error", (context, error) => {
    if (error.code === "unauthenticated") {
      app.$utils.account.logout(app?.store);
    }
  });

  return { ListAssetsJSON, ListPairsJSON, CreateOrderJSON, FindOrderJSON };
}
