module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    //   "plugin:vue-libs/recommended"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/no-unused-vars": "on",
    "vue/no-undef": "on",
    // "no-unused-vars": "on",
    // "no-undef": "on",
  },
};

/* Disabling rules via <!-- eslint-disable -->
For example:

    <template>
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <div a="1" b="2" c="3" d="4">
      </div>
    </template>

 */
