# 快速开始

欢迎来到 Babel 的世界！本指南将帮助你快速上手 Babel。

## 什么是 Babel？

Babel 是一个 JavaScript 编译器，主要用于将 ECMAScript 2015+ (ES6+) 代码转换为向后兼容的 JavaScript 语法，以便能够在当前和旧版本的浏览器或其他环境中运行。

## 安装

### 核心依赖

```bash
# 使用 npm
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# 使用 yarn
yarn add --dev @babel/core @babel/cli @babel/preset-env

# 使用 pnpm
pnpm add -D @babel/core @babel/cli @babel/preset-env
```

### 基本配置

在项目根目录创建 `babel.config.json`：

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 10"]
      }
    }]
  ]
}
```

## 第一个示例

### 1. 创建源文件

创建 `src/app.js`：

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};

const sum = (a, b) => a + b;

class Calculator {
  add(a, b) {
    return a + b;
  }
}

export { greet, sum, Calculator };
```

### 2. 编译代码

```bash
# 命令行编译
npx babel src --out-dir lib

# 或者在 package.json 中添加脚本
{
  "scripts": {
    "build": "babel src -d lib"
  }
}
```

### 3. 查看编译结果

编译后的 `lib/app.js`：

```javascript
"use strict";

function _classCallCheck(instance, Constructor) { /*...*/ }
function _defineProperties(target, props) { /*...*/ }

var greet = function greet(name) {
  return "Hello, " + name + "!";
};

var sum = function sum(a, b) {
  return a + b;
};

var Calculator = function Calculator() {
  _classCallCheck(this, Calculator);
};

var _Calculator = Calculator;
_Calculator.prototype.add = function add(a, b) {
  return a + b;
};

exports.greet = greet;
exports.sum = sum;
exports.Calculator = Calculator;
```

## 常用命令

```bash
# 编译整个目录
npx babel src -d lib

# 编译单个文件
npx babel src/app.js -o lib/app.js

# 监听文件变化
npx babel src -d lib --watch

# 生成 source maps
npx babel src -d lib --source-maps
```

## 下一步

- 了解 Babel 的[核心概念](./guide/core-concepts.md)
- 探索常用的 [Plugins 和 Presets](./guide/plugins.md)
- 集成到构建工具（Webpack、Rollup 等）

## 常见问题

### Babel 和 TypeScript 的区别？

Babel 可以编译 TypeScript，但不会进行类型检查。如果需要类型检查，需要配合使用 TypeScript 编译器。

### 为什么需要 polyfills？

Babel 只转换语法，不添加新的 API 和方法。对于 Promise、Map、Set 等新特性，需要使用 polyfill 或 core-js。
