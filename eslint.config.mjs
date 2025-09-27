// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends("airbnb-base"), // load Airbnb config in flat mode
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
    rules: {
      // custom overrides here
    },
  },
];
