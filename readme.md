### Jest 测试
官网地址：https://jestjs.io/docs/en/getting-started // 推荐

中文：https://www.jestjs.cn/docs/setup-teardown

### 环境搭建
1. 初始化项目：npm init -y
2. 安装jest到项目中： yarn add jest  / npm install jest
3. 在package.json中配置了test: 'jest'
4. 写测试file， 可以查看本demo的文件里的test
5. 运行yarn test的时候会主动的运行xxx.test.js的文件

生成代码覆盖率的file：
生成基本的配置文件： npx jest --init
生成代码覆盖率的报告： npx jest --coverage


### 扩展
#### 单元测试
1. 单元测试对象是实现了具体功能的程序单元；
2. 单元测试中的主要方法是基于代码的白盒测试【了解代码的逻辑】
3. 单元测试是针对模块内部的参数，逻辑，引用变量，处理错误，设计中的要求进行测试
4. 一般来说，写完一个模块单元后就要进行测试

#### 集成测试
1. 基于黑盒测试（你不需要知道代码逻辑）
2. 集成测试是基于模块和模块间的组合进行测试
3. 集成测试一般比单元测试晚进行测试
4. 集成测试主要是验证各个接口，接口之间的数据关系，即验证模块组合后能不能达到预期的效果


#### 钩子函数作用域

我们可以使用describe(desc, callback)来将我们的测试用例进行分组，Jest中钩子函数的作用域有下面三个特色：
1. 父级里的函数可以在子作用域中，父级分组类的函数可以在子集分组里边执行

```javascript
describe('父级作用域',() => {
  afterEach(callback); // 这是父级函数，但是可以在子集中执行

  describe('子级作用域1', () => {
    afterEach(callback); //这是自己作用域1里的函数，和同级的作用域互补干扰，各自执行自己的方法
  })

  describe('子级作用域2', () => {
   afterEach(callback); //这是自己作用域2里的函数，和同级的作用域互补干扰，各自执行自己的方法
  })
})
```

2. 钩子函数在同级分组作用域互不干扰，各起作用

3. 先执行外部的钩子函数，再执行内部的钩子函数

#### 当给test加上.only的时候，测试文件只会执行当前的测试案例



#### 尝试用的API
##### jest提供的四个关于测试先后的方法
1. beforeAll(desc, callback), 在所有的测试之前执行一遍
2. afterAll(desc,callback) 在所有的测试结束之后执行一遍
3. beforeEach(desc, callback) 在每个测试执行之前都会执行一次这个方法
4. afterEach(desc, callback) 在每个测试执行完之后都会执行一次这个方法

describe(title, cb) 可以将测试进行分组

#### 让jest可以使用ES6的import和export
1. yarn add  @babel/core, @babel/preset-env
2. 在根目录下create .babelrc文件
```js
{
  "presets": [
    [
      "@babel/preset-env", {
        "targets":{
          "node":"current"
        }
      }
    ]
  ]
}

```
