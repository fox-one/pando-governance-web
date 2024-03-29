import Vue from "vue";
import dayjs from "dayjs";
import { Component, Watch } from "vue-property-decorator";
import { getLocale } from "@foxone/utils/helper";
import { GlobalMutations } from "@/store/types";

export interface Page extends Vue {
  title: string;

  setLang: () => void;
  setPageConfig: () => void;
}

@Component({
  head() {
    const vm = this as Page;
    return {
      title: vm.title,
    };
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm: any) => {
      vm.setLang();
      vm.setPageConfig();
    });
  },
})
export default class PageView extends Vue {
  get title() {
    return "Pando Governance";
  }

  get appbar() {
    return {
      style: "nav",
    };
  }

  get background() {
    return "";
  }

  setLang() {
    const locale = getLocale();

    this.$i18n.locale = locale;
    this.$vuetify.lang.current = locale;
    dayjs.locale(locale);

    document.title = this.title as string;
  }

  @Watch("title")
  setPageConfig() {
    const defaultThemeColor = this.$vuetify.theme.dark ? "#000000" : "#ffffff";
    const color = (this.appbar as any).color || defaultThemeColor;

    this.$store.commit(GlobalMutations.SET_APPBAR, {
      title: this.title,
      ...this.appbar,
    });

    setTimeout(() => {
      this.$utils.mixin.setMixinTheme(color);
    }, 200);
  }
}
