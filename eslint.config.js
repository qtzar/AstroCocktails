// eslint.config.js

import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Additional plugins
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import("typescript-eslint").Config} */
export default [
  {
    ignores: ['.astro/', 'dist/', 'node_modules/', '.idea/', '.github/', '.husky'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,astro}'] }, // Add the astro extension
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: { react: { version: 'detect' } }, // in case you install React latter
  },
  {
    rules: {
      'prettier/prettier': 'off', // Code style as "errors" and not "warnings" seem like an overkill to me.
      '@typescript-eslint/no-explicit-any': 'off',
      'valid-typeof': 'off',
      'no-constant-binary-expression': 'off',
    },
  },
];
