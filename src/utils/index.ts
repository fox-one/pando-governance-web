import * as helper from "./helper";
import * as app from "./app";
import * as account from "./account";
import utils, { mixin } from "@foxone/utils";

export default {
  helper,
  app,
  mixin,
  account,
  time: { ...utils.time },
};
