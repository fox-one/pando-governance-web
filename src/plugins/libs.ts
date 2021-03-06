import Vue from "vue";
import UIKit from "@foxone/uikit";
import infiniteScroll from "vue-infinite-scroll";

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
};

export default plugin;
