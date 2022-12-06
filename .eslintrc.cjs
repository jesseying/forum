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
