import * as helper from "./helper";
import * as app from "./app";
import utils, { mixin } from "@foxone/utils";

export default {
  helper,
  app,
  mixin,
  time: { ...utils.time },
};
