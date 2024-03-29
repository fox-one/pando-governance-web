module.exports = {
  root: true,
  ignorePatterns: ["*.pb.[t|j]s"],
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "arrow-parens": ["error", "always"],
    camelcase: "off",
    "no-empty": "off",
    "no-undef": "off",
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-namespace": ["off"],
    "vue/require-component-is": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
