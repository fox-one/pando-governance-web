import UIKit from "@foxone/uikit";
import { mergeDeep } from "vuetify/lib/util/helpers";
import icons from "@/utils/icons";

export default function({ store }) {
  const isDark = store.state.app.settings.dark;

  const options = {
    icons: {
      values: icons,
    },
    theme: {
      dark: isDark,
      themes: {
        light: {},
        dark: {},
      },
    },
  };

  return mergeDeep(UIKit.preset, options);
}
