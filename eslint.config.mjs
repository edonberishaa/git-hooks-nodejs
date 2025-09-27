// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // ensures resolution works
});

export default [
  js.configs.recommended,

  // Load Airbnb config in flat mode
  ...compat.extends("airbnb-base"),

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
    rules: {
          "linebreak-style": 0, // disable check
      // custom overrides here
    },
  },
];
