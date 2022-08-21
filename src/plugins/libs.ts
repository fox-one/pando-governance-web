import Vue from "vue";
import UIKit from "@foxone/uikit";
import Passport from "@foxone/mixin-passport";
import infiniteScroll from "vue-infinite-scroll";
import { MIXIN_CLIENT_ID } from "@/constants";

import "@foxone/uikit/build/index.min.css";
import "@/components";

const plugin = ({ app }) => {
  Vue.use(infiniteScroll);
  Vue.use(UIKit, {
    vuetify: app.vuetify,
    dialog: { flat: true },
    toast: { top: false, centered: true },
    auth: {
      wallets: ["fennec", "mixin"],
      clientId: MIXIN_CLIENT_ID,
      scope: "PROFILE:READ ASSETS:READ",
      pkce: true,
    },
  });
  Vue.use(Passport, {
    origin: "Pando Governance",
    config: { infuraId: "a018fa2f735a435f9a7917f0d429c61a" },
    onDisconnect: () => {
      app.$utils.account.logout({ $store: app.store });
    },
  });
};

export default plugin;
