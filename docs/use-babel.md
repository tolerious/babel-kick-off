# 开始使用 Babel

Babel工具链中有不少的工具，无论你是在项目中通过简单配置 Babel 让其能够“编译”JavaScript 代码也好，还是开发一个工具，把 Babel
集成到你的工具中也好，这些工具都能够让你轻松的使用 Babel。

# 课前准备

下面我们用代码展示下，如何使用 Babel把 ES2015+ 的代码，编译成可以在任何浏览器中运行的代码。
为此，我创建了一个纯净的[模版项目](https://github.com/tolerious/simple-babel-template)
，你可以直接使用，从而避免了自己去新建项目，手动创建一些无关紧要的文件夹等等。

- 安装degit

```
pnpm i degit -g
```

- 创建新目录存放模板

```   
mkdir your-project-dir
```

- clone 项目模版

```
degit tolerious/simple-babel-template
```

别忘记先创建一个空的目录，然后在该目录中运行这条命令,执行结束后运行

```
pnpm i
```

# 实操         
## 安装依赖
```
pnpm add --save-dev @babel/core @babel/cli @babel/preset-env
```

## 创建Babel 配置文件`babel.config.js`,并添加如下内容：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
