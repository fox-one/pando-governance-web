import Vue from "vue";
import UIKit from "@foxone/uikit";
import infiniteScroll from "vue-infinite-scroll";
import { MIXIN_CLIENT_ID } from "@/constants";

import "@foxone/uikit/build/index.min.css";
import "@/components";

const plugin = ({ app }) => {
  Vue.use(infiniteScroll);
  Vue.use(UIKit);
  Vue.use(UIKit.Toast, app.vuetify, {
    top: false,
    centered: true,
  });
  Vue.use(UIKit.Dialog, app.vuetify, { flat: true });
  Vue.use(UIKit.Passport, {
    vuetify: app.vuetify,
    options: { origin: "Pando Governance" },
    authModalProps: {
      wallets: ["fennec", "mixin"],
      clientId: MIXIN_CLIENT_ID,
      scope: "PROFILE:READ ASSETS:READ",
      pkce: true,
    },
  });
};

export default plugin;
