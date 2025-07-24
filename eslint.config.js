import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

//previous config working without security
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
      ecmaVersion: 12,
      sourceType: "module",
   },
   rules: {
      "security/detect-eval-with-expression": "error",
      // add other security rules you want here
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


// eslint.config.mjs method
// /** @type {import('eslint').FlatConfig[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: globals.browser,
//       ecmaVersion: 2021,
//       sourceType: "module",
//     },
//     plugins: {
//       js: pluginJs,
//       react: pluginReact,
//       security: pluginSecurity,
//     },
//     rules: {
//       // Spread recommended rules from @eslint/js and react plugin
//       ...pluginJs.configs.recommended.rules,
//       ...pluginReact.configs.flat.recommended.rules,

//       // Add security plugin rule overrides or additions here
//       "security/detect-eval-with-expression": "error",
//     },
//     extends: [
//       pluginJs.configs.recommended,
//       pluginReact.configs.flat.recommended,
//       "plugin:security/recommended",  // Add security recommended config if you want
//     ],
//   },
// ];
