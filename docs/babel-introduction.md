# Babel 简介

Babel是一个JavaScript编译器，准确的说它不是一个完整的编译器而是一个“转译器”。为什么是转译器，因为它“吃掉”JavaScript代码，“产生”的仍旧是JavaScript代码。
可以说它更多的是涉及到了编译原理中所讲述的编译器前端的内容。

## Babel 是一个编译器

Babel 具备的核心功能就是把ES2015+版本的JS，转换成可以运行在旧版浏览器或者开发环境中的JS。
我愿称之为“魔法”，虽然我们的主流浏览器对新的语言特性在不断的更新，但是一些处于 draft 状态的提案，是不会那么快的被主流浏览器所支持的，这就是我们学习和使用
Babel 的魅力所在。它可以让我们永远能够使用语言最新的语法特性。
概括来说：

- 转换JS代码。
- 提供Polyfill功能，通过core-js这个库来实现。比如在我的旧版本的浏览器或者开发环境中，箭头函数，Promise无法识别或者使用，那么，通过polyfill功能，
  我们就可以让你用上最新的ES语法，但是可以生成任意你指定的目标环境的JS代码。

> Question：
> 
>有面试题说，手写Promise实现。那我通过Babel的polyfill功能生成的Promise代码，跟手写Promise的代码有什么不同？

Babel 与生俱来就是插件化的，你可以利用已经存在的插件或者你自己创建的插件来完成定制化整个转换流程。你也可以很容的创建一个 preset，让其包含你所需要的所有
的 plugin。

如果你想要创建 plugin，可以尝试如下两种方式。
- 通过[astexplorer.net](https://astexplorer.net/)，教程请查看[这里](./write-babel-plugin-by-ast-explorer.md)
- 通过[generator-babel-plugin](https://github.com/babel/generator-babel-plugin)这个工具，教程请查看[这里](./write-babel-plugin-by-generator.md)