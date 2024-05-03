import { parserOptions } from "./eslint.parserOptions.mjs";
import { rules } from "./eslint.rules.mjs";
import { typescriptEslintRules } from "./typescriptEslintRules.mjs";

// Configuration object
const config = {
  files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  languageOptions: {
    parserOptions, // Specify parser options here
  },
  ignores: ["**/node_modules/*", "**/public/*", "babel.config.js", "App.js"],
  rules: {
    ...rules,
    ...typescriptEslintRules,
  },
};

export default [config];
