export const isProduct = process.env.APP_ENV === "prod";

export const API_BASE = "https://governance-api.pando.im/api";

export const SWAP_LP_BASE = isProduct ? "" : "https://swaplp-dev-api.pando.im";

export const MIXIN_CLIENT_ID = isProduct ? "" : "0900a886-acde-4f7d-a77c-17d47c95fa7f";
