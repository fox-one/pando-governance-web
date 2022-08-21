import { GlobalMutations } from "@/store/types";

export function logout(store) {
  store.commit(GlobalMutations.CLEAR_AUTH);
}

export async function openAuth(vm: Vue) {
  const { channel, token } = await vm.$passport.auth();

  vm.$store.commit(GlobalMutations.SET_OAUTH_INFO, { token, channel });
}

export async function sync(vm: Vue) {
  const tokenLocale = vm.$store.state.auth.token;
  const channelLocale = vm.$store.state.auth.channel;
  const auth = await vm.$passport.sync({ channel: channelLocale, token: tokenLocale });

  vm.$store.commit(GlobalMutations.SET_OAUTH_INFO, auth);
}
