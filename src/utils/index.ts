import * as helper from "./helper";
import * as app from "./app";
import utils from "@foxone/utils";

export default {
  helper,
  app,
  time: { ...utils.time },
};
