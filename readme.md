
## 为什么要用zx？
可以在js中调用shell命令

----

shebang, 也成hashbang，是有#!组成的字符序列，文件中存在shebang 的情况下，系统会分析shebang后的内容，并调用指定的解释器来解释执行文件的内容
```shell
#!/usr/bin/env bash 调用系统环境变量中的bash，方便移植，推荐写法
#!/bin/bash 也可以指定固定的路径，但不方便移植，不推荐
```
---- 

直接tsc会把ts文件编译成js文件

pnpm link --global 使当前本地包可在系统范围内或其他位置访问

将当前库link到全局，会自动的安装package.json的bin字段的命令，这样就可以全局调用。

global 全局对象

`Object.assign(global, { __filename, __dirname, require });`

----

Node
- basename, dirname, extname, join, resolve
- url
- createRequire

reateRequire 是 Node.js 12 引入的一个函数，用于创建一个类似于 require 函数的实例，该实例可以用于动态地加载 Node.js 模块。

在 Node.js 中，require 函数用于加载模块。但是在 ECMAScript 模块中，由于其具有静态结构，不能像 CommonJS 模块那样使用 require 动态加载模块。因此，Node.js 引入了 createRequire 函数，以便在 ECMAScript 模块中动态加载模块。
```js
import { createRequire } from 'node:module'; const require = createRequire(import.meta.url); const lodash = require('lodash');
```
在上面的示例中，我们首先使用 createRequire 函数创建一个 require 实例，并将其分配给变量 require。然后，我们可以使用这个 require 实例加载 lodash 模块，就像在 CommonJS 模块中一样

----

tsconfig 里面的 "module": "NodeNext“ 这里的 NodeNext 是指的是 esm 嘛？

是的，"module": "NodeNext" 是指将 TypeScript 配置为使用 ECMAScript 模块（ESM）。NodeNext 是一种模块解析策略，它遵循 Node.js 在 ESM 支持方面的最新进展。当您将 module 设置为 NodeNext 时，TypeScript 会按照 Node.js 支持的 ESM 语法和解析规则进行编译。

这意味着，在这种配置下，您的 TypeScript 代码将编译为 ESM，而不是默认的 CommonJS（CJS）格式。您需要确保使用了一个支持 ESM 的 Node.js 版本（例如，12.17.0 或更高），并且在项目的 package.json 文件中设置了 "type": "module"。

这样，您的项目将使用 ESM 进行构建和运行，使您能够充分利用 ESM 提供的功能，如顶层 await 和动态 import()。

----



## 第一个核心功能点：$`command`

```js
const res = await $`cat package.json`
```

如何实现的？

如何执行这些命令的？

$``是什么语法？
学名：**标签模板**
```js
const $ = (a) => console.log(a)
$`heihei`
// 输出['heihei', raw: Array(1)]

function tag(strings, name, age){
    console.log(strings);
    console.log(name, age);
}

const name = 'tom';
const age = 18;

console.log(tag`i am ${name}, my age is ${18}`)
// (3) ['i am ', ', my age is ', '', raw: Array(3)]
// tom 18
// undefined  因为tag没有任何返回值，所以默认是undefined
```

如何获取返回值？


如何读源码？

先看测试用例，并调试单元测试，看每个步骤都做了啥

launch.json的配置

ts declare globals 全局声明变量

ProcessPromis扩展了Promise类？ 因为需要额外的控制逻辑，继承之后就可以自定义内部的控制逻辑

手写promise：其中的then自动调用，不需要外部触发