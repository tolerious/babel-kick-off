# 开始使用 Babel

Babel工具链中有不少的工具，无论你是在项目中通过简单配置 Babel 让其能够“编译”JavaScript 代码也好，还是开发一个工具，把 Babel
集成到你的工具中也好，这些工具都能够让你轻松的使用 Babel。

# 具体示例

下面我们用代码展示下，如何使用 Babel把 ES2015+ 的代码，编译成可以在任何浏览器中运行的代码。
为此，我创建了一个纯净的[模版项目](https://github.com/tolerious/simple-babel-template)
，你可以直接使用，从而避免了自己去新建项目，手动创建一些无关紧要的文件夹等等。

- 安装degit

```
pnpm i degit -g
```

- clone 项目模版

```
degit tolerious/simple-babel-template
```
别忘记先创建一个空的目录，然后在该目录中运行这条命令

