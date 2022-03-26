/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
}
