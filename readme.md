
## 为什么要用zx？
可以在js中调用shell命令


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