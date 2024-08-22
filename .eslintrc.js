require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: { node: true, browser: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
    'prettier/prettier': 'warn',
    // 禁止未使用的变量
    'no-unused-vars': [
      'warn',
      {
        //  仅检查是否使用了本地声明的变量，但允许未使用全局变量。
        vars: 'local',
        //  将不检查最后使用的参数之前出现的未使用的位置参数，但将检查最后使用的参数之后的所有命名参数和所有位置参数
        args: 'after-used',
      },
    ],
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',
    // 禁止在定义变量之前使用变量
    // 'no-use-before-define': ['error', { functions: false }],
    // 默认参数应在最后
    'default-param-last': 'warn',
    // 一个方法默认不超过50行
    'max-lines-per-function': [
      'error',
      {
        // 忽略空行
        skipBlankLines: true,
        // 忽略注释
        skipComments: true,
      },
    ],
    // 强制回调嵌套不超过三层
    'max-nested-callbacks': ['warn', { max: 3 }],
    // 强制嵌套不超过四层
    'max-depth': 'warn',
    // 禁止使用console
    'no-console': 'warn',
    // 禁止在代码块里面声明与外面变量名相同的变量
    'no-shadow': 'off',
    // 不允许将导入、导出和解构的分配重命名为相同的名称
    'no-useless-rename': 'error',
    // 需要 let 或 const 而不是 var
    'no-var': 'warn',
    // 要求在文件末尾换行
    'eol-last': ['error', 'always'],
    // 要求尽可能使用单引号
    quotes: ['warn', 'single'],
    // 要求在立即执行函数周围加上括号
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    // 控制语句强制大括号
    curly: ['error'],
  },
  parserOptions: { ecmaVersion: 'latest', ecmaFeatures: { jsx: true } },
  // 忽略的文件和目录
  ignorePatterns: ['node_modules', 'dist', 'vite.config.mjs'],
}
