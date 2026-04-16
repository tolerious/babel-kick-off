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
          "chrome": "43"
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
> 模块语法解析文件。文件自动采用严格模式，且允许使用 import/export 语句。

你可以尝试在配置文件中把它改成其它值，比如`commonjs`，
那么，你就可以看到在编译好的文件中，严格模式就没了。具体的解释说明可以参考[这里](https://babeljs.io/docs/options#sourcetype)。

```json{2}
{
  "sourceType": "commonjs",
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "43"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

### 编译箭头函数

我们在源文件中使用了箭头函数，在编译过后的文件中，箭头函数被编译成了普通的函数。

我们知道有一个网站叫做[`Can I Use`](https://caniuse.com/)，打开网站以后，我们搜索`arrow functions`
，我们看看chrome是在哪个版本开始支持箭头函数的。
![chrome-support-arrow-functions](/chrome-support-arrow-functions.png)
从图中我们可以看到，chrome在版本`45`及以后的版本开始支持箭头函数。

有了这些信息，我们来修改下Babel的配置文件，修改如下地方

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "43" // [!code --]
          "chrome": "45" // [!code ++]
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

重新运行编译命令

```shell
./node_modules/.bin/babel index.js --out-dir lib
```

奇妙的事情发生了，我们经过编译过后的文件`lib/index.js`中，箭头函数还是被编译成了简单函数，诶？

`Can I use`上不是说chrome在版本45及以后就支持箭头函数了么，按道理，箭头函数不应该被编译成普通函数了啊，这是怎么回事儿？

原因是Babel认为在这种刚开始支持某种特性的版本中，一些边缘条件下，仍有出错的可能性，所以Babel选择了增大这个版本号，也就是后面的版本对bug都修复的差不多了。Babel认为，这个特性在这个版本的浏览器中已经足够安全可以使用了，才不会对它进行编译。

那么我们去哪里知道在哪个版本以后，Babel才会认为箭头函数是安全的呢？打开如下[链接](https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/plugins.json)。

Babel在仓库中维护了一个类似数据库的内容。

```json
{
  "transform-arrow-functions": {
    "chrome": "47",
    "opera": "34",
    "edge": "13",
    "firefox": "43",
    "safari": "10",
    "node": "6",
    "deno": "1",
    "ios": "10",
    "samsung": "5",
    "rhino": "1.7.13",
    "opera_mobile": "34",
    "electron": "0.36"
  }
}
```
我们可以看到，在chrome47以后，箭头函数就不会被编译成普通函数了，我们可以通过修改Babel配置文件，来验证。
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "43" // [!code --]
          "chrome": "47" // [!code ++]
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
通过验证，我们可以发现，这次Babel没有对箭头函数进行编译了。
```javascript{7-9}
"use strict";

// Babel 演示代码
console.log('Hello from Babel demo!');

// 示例：使用 ES6+ 语法
var greeting = name => {
return `Welcome to Babel, ${name}!`;
};
```