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
  FIconChevronLeft4PBold,
  FIconMenu,
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
  FIconChevronLeft4PBold: { component: FIconChevronLeft4PBold },
  FIconMenu: { component: FIconMenu },
};

const icons = ["IconPandoLogo", "IconCategory"].reduce((m, k) => ({ ...m, [k]: { component: k } }), {});

export default { ...icons, ...ficons };
