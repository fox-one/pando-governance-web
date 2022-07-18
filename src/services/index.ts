import { NuxtAppOptions } from "@nuxt/types";
import createApi from "./api";
import createProto from "./proto";

export default function createHttpService(app: NuxtAppOptions) {
  return { ...createProto(app), ...createApi(app) };
}
