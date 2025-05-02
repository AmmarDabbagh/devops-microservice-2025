const js = require("@eslint/js");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js:recommended"]
  }
]);
