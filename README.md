# 依赖配置
npm install react-native-safe-area-context

## 1. 安装

```shell
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

## 2. 配置

### 2.1. eslint

在项目根目录下创建 `.eslintrc.js` 文件，并添加以下内容：

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    
  }
};
```
### 2.2. prettier

在项目根目录下创建 `.prettierrc` 文件，并添加以下内容：

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "printWidth": 100,
  "arrowParens": "avoid"
}
```

# 项目前台搭建

# RTK & Expo router & axios安装配置

# 页面开发

## Status Bar


