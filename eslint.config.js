import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"],
     plugins: { js },
      extends: ["js/recommended"],
       languageOptions: {
      sourceType: "module", // since you're using import/export
      ecmaVersion: "latest",
    },
     },
  { files: ["**/*.{js,mjs,cjs}"],
     languageOptions: 
     { globals: {
      ...globals.node,
      ...globals.browser 
    },
   },
  },
  {
    files: ["tests/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.mocha,   // allow 'describe', 'it', 'after', etc.
      },
    },
  },
]);
