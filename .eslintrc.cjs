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
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'vue/v-on-event-hyphenation': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-arrow-functions-in-watch': 'off',
    'vue/no-v-html': 'off',
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'off',
    'no-useless-escape': 'off',
    'no-sparse-arrays': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'vue/html-indent': 'off',
    // all rules docs https://eslint.org/docs/rules/
    'prettier/prettier': ['error', {
      // 结尾加分号
      semi: false,
      // 使用单引号
      singleQuote: true,
      // 一行最大字符数
      printWidth: 200,
      // tab
      tabWidth: 2,
      // 尾部逗号
      trailingComma: 'none',
      // 箭头函数单参数的情况下是否省略括号，always为总是不省略
      arrowParens: 'always',
      // 使用制表符而不是空格缩进行
      useTabs: false,
      // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
      quoteProps: 'as-needed',
      // 在JSX中使用单引号而不是双引号
      jsxSingleQuote: false,
      // 在对象文字中的括号之间打印空格
      bracketSpacing: true,
      // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
      rangeStart: 0,
      rangeEnd: Infinity,
      // 指定要使用的解析器，不需要写文件开头的 @prettier
      requirePragma: false,
      // 不需要自动在文件开头插入 @prettier
      insertPragma: false,
      // 使用默认的折行标准 always\never\preserve
      proseWrap: 'preserve',
      // 指定HTML文件的全局空格敏感度 css\strict\ignore
      htmlWhitespaceSensitivity: 'css',
      // Vue文件脚本和样式标签缩进
      vueIndentScriptAndStyle: false,
      // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
      endOfLine: 'lf'
    }],
  },
};
