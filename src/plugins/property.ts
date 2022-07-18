/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from "@nuxt/types";
import utils from "@/utils";
import createHttpService from "@/services";
import Fennec from "@foxone/fennec-dapp";

declare module "vue/types/vue" {
  interface Vue {
    $utils: typeof utils;
    $apis: ReturnType<typeof createHttpService>;
    $fennec: Fennec;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $utils: typeof utils;
    $apis: ReturnType<typeof createHttpService>;
    $fennec: Fennec;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $utils: typeof utils;
    $apis: ReturnType<typeof createHttpService>;
    $fennec: Fennec;
  }
}

const plugin: Plugin = ({ app }, inject) => {
  inject("utils", utils);
  inject("apis", createHttpService(app));
  inject("fennec", new Fennec());
};

export default plugin;
