/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    // unplugin-auto-import :: generated automatically
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // all rules docs https://eslint.org/docs/rules/
    'prettier/prettier': ['error', {
      semi: false, // 结尾加分号
      singleQuote: true, // 使用单引号
      printWidth: 200, // 一行最大字符数
      tabWidth: 2, // tab
      trailingComma: 'none', // 尾部逗号
      arrowParens: 'always', // 箭头函数单参数的情况下是否省略括号，always为总是不省略
      
    }],
  },
};
