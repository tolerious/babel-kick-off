# 学习资源汇总

这里收集了学习 Babel 的优质资源，帮助你从入门到精通。

## 官方资源

### 核心文档
- [Babel 官方文档](https://babeljs.io/docs/) - 最权威的参考资料
- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook) - 深入理解 Babel 的手册
- [插件开发手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md) - 中文版插件开发指南

### GitHub 仓库
- [Babel 核心仓库](https://github.com/babel/babel) - 源代码和 Issue 讨论
- [Babel Presets](https://github.com/babel/babel/tree/main/packages) - 各种官方预设

## 教程文章

### 入门级
1. [Babel 入门教程](https://www.ruanyifeng.com/blog/2016/01/babel.html) - 阮一峰老师著
2. [Babel 简明教程](https://segmentfault.com/a/1190000004211446)
3. [ES6+ 转 ES5：Babel 使用指南](https://www.jianshu.com/p/5a5b63d3f4c4)

### 进阶级
1. [深入理解 Babel 插件开发](https://segmentfault.com/a/1190000011522756)
2. [Babel 插件开发实战](https://zhuanlan.zhihu.com/p/27883317)
3. [AST 抽象语法树解析](https://juejin.cn/post/6844903680232820744)

### 实战项目
1. [实现一个简单的 Babel 插件](https://juejin.cn/post/6844903942717751303)
2. [使用 Babel 自动化代码优化](https://zhuanlan.zhihu.com/p/55565553)
3. [Babel 在实际项目中的应用](https://www.infoq.cn/article/babel-practice)

## 视频教程

### 中文视频
1. [Babel 插件开发实战 - B站](https://www.bilibili.com/video/BV1VE411F7cW)
2. [前端编译原理：从 Babel 到工程化](https://www.bilibili.com/video/BV1zE411V7C7)
3. [深入浅出 Babel](https://www.imooc.com/learn/1234)

### 英文视频
1. [Babel: Modern JavaScript Development](https://www.youtube.com/watch?v=3TCf1ac6uJE)
2. [Writing Custom Babel Plugins](https://www.youtube.com/watch?v=6fmJY8jqH3Y)

## 工具和资源

### 在线工具
- [Babel REPL](https://babeljs.io/repl) - 在线编译和测试
- [AST Explorer](https://astexplorer.net/) - 可视化 AST 结构
- [JS Console](https://jsconsole.com/) - JavaScript 控制台

### VSCode 插件
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) - Babel 语法高亮
- [AST Explorer](https://marketplace.visualstudio.com/items?itemName=nicolas-van.ast-explorer-vscode) - AST 查看器

### Chrome 插件
- [Babel Handbook](https://chrome.google.com/webstore/) - 快速查阅手册

## 书籍推荐

### 中文书籍
1. 《深入浅出 Babel》- 深入理解编译原理
2. 《ES6 标准入门》(第3版) - 阮一峰著，包含 Babel 章节
3. 《JavaScript 高级程序设计》- 第4版，涵盖现代工具链

### 英文书籍
1. "Programming JavaScript Applications" - 包含构建工具章节
2. "You Don't Know JS" - 涉及转译器概念

## 社区资源

### 中文社区
- [Babel 中文文档](https://www.babeljs.cn/)
- [Segment Fault Babel 标签](https://segmentfault.com/t/babel)
- [掘金 Babel 专题](https://juejin.cn/tag/Babel)

### 国际社区
- [Babel Discord](https://discord.gg/babel) - 官方 Discord 服务器
- [Stack Overflow - Babel Tag](https://stackoverflow.com/questions/tagged/babel)
- [Twitter - @babeljs](https://twitter.com/babeljs)

### 会议演讲
- [BabelConf](https://babeljs.io/blog/2019/02/19/7.4.0#babelconf-2019)
- [各种前端技术大会的 Babel 相关分享](https://www.youtube.com/results?search_query=babel+conference)

## 实践项目

### 学习项目
1. [babel-plugin-demo](https://github.com/) - 各种插件示例
2. [awesome-babel](https://github.com/dantic/awesome-babel) - Babel 资源合集
3. [create-babel-plugin](https://github.com/babel/babel/blob/main/packages/create-babel-plugin) - 插件脚手架

### 开源实践
- 查看 React、Vue 等项目如何使用 Babel
- 学习主流脚手架（create-react-app、Vue CLI）的 Babel 配置

## 学习路径建议

### 初级（1-2周）
1. 了解 Babel 基本概念和作用
2. 学习基本配置和使用
3. 熟悉常用 presets 和 plugins

### 中级（1-2个月）
1. 深入学习 AST（抽象语法树）
2. 编写简单的 Babel 插件
3. 理解 Babel 的工作原理

### 高级（持续）
1. 开发复杂的 Babel 插件
2. 贡献 Babel 开源项目
3. 研究编译器理论和优化

## 相关技术

- [Webpack](https://webpack.js.org/) - 模块打包工具
- [Rollup](https://rollupjs.org/) - 下一代打包工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Flow](https://flow.org/) - JavaScript 静态类型检查
- [ESLint](https://eslint.org/) - JavaScript 代码检查工具

## 常用 Polyfill

- [core-js](https://github.com/zloirock/core-js) - 标准 JavaScript 库
- [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) - async/await 支持
- [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) - 完整的 polyfill（已废弃，推荐 core-js）

---

**提示**：建议按照官方文档 → 实战教程 → 插件开发的顺序学习，边学边练效果最佳。

有好的资源推荐？欢迎提交 PR 帮助完善这个列表！
