
## 为什么要用zx？
可以在js中调用shell命令

shebang, 也成hashbang，是有#!组成的字符序列，文件中存在shebang 的情况下，系统会分析shebang后的内容，并调用指定的解释器来解释执行文件的内容
```shell
#!/usr/bin/env bash 调用系统环境变量中的bash，方便移植，推荐写法
#!/bin/bash 也可以指定固定的路径，但不方便移植，不推荐
```

直接tsc会把ts文件编译成js文件

pnpm link --global 使当前本地包可在系统范围内或其他位置访问

将当前库link到全局，会自动的安装package.json的bin字段的命令，这样就可以全局调用。

global 全局对象

`Object.assign(global, { __filename, __dirname, require });`

Node
- basename, dirname, extname, join, resolve
- url
- createRequire


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