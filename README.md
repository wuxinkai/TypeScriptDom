# 继承
### 原型上的所有方法和属性可以被构造函数的实例共享
- 没有原型就不会共享，会导致空间浪费
- 原型上只管共有的 
- 创建一个函数，会自动创建一个空间，prototype叫原型空间
- __porto__ new在创建对象时候会赋予新对象一个属性指向prototype对象， 
# ts自动重启+ts自动运行+parcel自动打包
初始化  ,出现package.json
```
 npm init -yes
```
安装typescript
```
cnpm i typescript -g
```
生成tsconfig.json
```
tsc -init
```
修改tsconfig.json 配置
```
// "outDir": "./",    //输出目录
```

解决全局红色波浪线bug ,export { }
```
// count权限报错是因为全局有定义这样的一个变量
let count: number = 11

console.log('shop打印', count)

// 红色波浪线 解决办法, 只在我这个文件进行搜索
export { }
```

编译代码在 终端输入
```
tsc
```
安装tsc让node直接运行ts代码 ，不用使用tsc将代码编译js代码 
```
 //全局
 cnpm i ts-node -g
//本地
cnpm i ts-node -D
```
安装自动检测工具nodemon，检测到目录有改变会自定启动调试，基于node.js
```
//全局
 cnpm install -g nodemon 

 //本地
 cnpm i nodemon -D

```
在 package.js中配置检测任务，自动启动检测任务
```
"script":{
    "dev":"nodemon --watch src/ -e ts --exec ts-node ./src/index.ts"
}
```
执行启动命令
```
npm  run dev
```
如果报错 Error: Cannot find module 'typescript' 从新下载
```
npm i -g typescript

或
yarn global add typescript
```

partcel支持在浏览器下运行ts文件
```
安装
cnpm install parcel-bundler --save-dev
执行 ：
yarn starParcel
//生成dist  文件
文件一直启动
Server running at http://localhost:1234  
```

# 类: 
```

```
