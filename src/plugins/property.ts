/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from "@nuxt/types";
import utils from "@/utils";
import createHttpService from "@/services";
import { API_BASE } from "@/constants";

declare module "vue/types/vue" {
  interface Vue {
    $utils: typeof utils;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $utils: typeof utils;
    $apis: ReturnType<typeof createHttpService>;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $utils: typeof utils;
    $apis: ReturnType<typeof createHttpService>;
  }
}

const plugin: Plugin = ({ app }, inject) => {
  inject("utils", utils);
  inject("apis", createHttpService(app, API_BASE));
};

export default plugin;
