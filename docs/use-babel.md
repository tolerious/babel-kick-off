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
          "chrome": "46"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}

```

## 创建测试javascript文件

```javascript
// Babel 演示代码
console.log('Hello from Babel demo!');

// 示例：使用 ES6+ 语法
const greeting = (name) => {
    return `Welcome to Babel, ${name}!`;
};
```

在这个例子中，我们使用了一个箭头函数。
在终端中运行

```shell
./node_modules/.bin/babel index.js --out-dir lib
```

我们将在`lib`目录中看到生成的一个名为`index.js`的文件，内容如下：

```javascript{1,7-9}
"use strict";

// Babel 演示代码
console.log('Hello from Babel demo!');

// 示例：使用 ES6+ 语法
var greeting = function greeting(name) {
    return `Welcome to Babel, ${name}!`;
};
```

我们可以很容易的看到这两个文件的差异所在，

- 在第一行开启了严格模式
- 箭头函数被编译成了普通的函数
  下面就这两个不同的点做一些分析，后续在做代码测试的时候，在对比编译前后的文件时发现有不一致的地方，都可以用类似的方法进行分析，就可以知道为什么有的代码被编译了，有的代码却没有被编译了。

### 严格模式

我不禁产生了疑问，我的源文件也没开启严格模式啊，为啥编译出来的文件开启了严格模式，是不是经过Babel编译的js文件都会变成严格模式呢？下面我们就来一探究竟。

我们回头看看我们的Babel配置文件，我们使用了最基础的配置，最基础，也就意味着，有一些配置选项时默认的，问题就出现在了这里。
在Babel中我们有一个配置选项叫做`sourceType`,它与`presets`选项平级。默认值为`module`,意思就是
> 使用 ECMAScript
模块语法解析文件。文件自动采用严格模式，且允许使用 import/export 语句。

你可以尝试在配置文件中把它改成其它值，比如`commonjs`
那么，你就可以看到在编译好的文件中，严格模式就没了。具体的解释说明可以参考[这里](https://babeljs.io/docs/options#sourcetype)。

```json{2}
{
  "sourceType": "commonjs",
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "46"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}


```

### 编译箭头函数