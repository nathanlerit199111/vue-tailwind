/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    parser: 'vue-eslint-parser', // Use vue-eslint-parser for Vue files
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/attribute-hyphenation': ['error', 'always', { 'ignore': ['id'] }]
  }
};
