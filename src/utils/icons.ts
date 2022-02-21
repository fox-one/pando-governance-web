import {
  FIconLakeLogo,
  FIconFSwapLogo,
  FIconRingsLogo,
  FIconLeafLogo,
  FIconTwitterFill,
  FIconDiscordFill,
  FIconTelegramFill,
  FIconMixinFill,
  FIconRedditFill,
  FIconChevronLeft4P,
  FIconMenu,
  FIconChevronDown4PBold,
  FIconUpRight3PFill,
} from "@foxone/icons";

const ficons = {
  FIconLakeLogo: { component: FIconLakeLogo },
  FIconFSwapLogo: { component: FIconFSwapLogo },
  FIconRingsLogo: { component: FIconRingsLogo },
  FIconLeafLogo: { component: FIconLeafLogo },
  FIconTwitterFill: { component: FIconTwitterFill },
  FIconDiscordFill: { component: FIconDiscordFill },
  FIconTelegramFill: { component: FIconTelegramFill },
  FIconMixinFill: { component: FIconMixinFill },
  FIconRedditFill: { component: FIconRedditFill },
  FIconChevronLeft4P: { component: FIconChevronLeft4P },
  FIconMenu: { component: FIconMenu },
  FIconChevronDown4PBold: { component: FIconChevronDown4PBold },
  FIconUpRight3PFill: { component: FIconUpRight3PFill },
};

const icons = ["IconPandoLogo", "IconCategory", "IconCollapse"].reduce((m, k) => ({ ...m, [k]: { component: k } }), {});

export default { ...icons, ...ficons };
