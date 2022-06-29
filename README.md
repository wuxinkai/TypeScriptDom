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

### 继承子类
```
import OrderDetail from "./orderDetail";
//orderDetailArray 继承了整个详情类，做为类型
public orderDetailArray: Array<OrderDetail> = []
```
### 感叹号不用给默认值
```
 public price!: number;
```
###   函数重载 和方法重载
- 函数重载，只要两个函数名相同就是重载
- 功能相同但细节不同，我们可以用函数重载来解决

### 重载的优势
- 结构分明
- 各司其职 自定提示方法和属性
- 有利于扩展功能
###  函数重载规则

### ?代表可选参数
```
type type_charParma={
    width?:number,
    height?:number,
    radius?:number,
}
```

### 公有和私有 private和public
```
export default class MyLocalStorsge{
    //静态方法，私有的 
    private constructor(){

    }
    // 公共方法 ，外部可以通过这个属性和方法
    public getInstance(){

    }
}

```
### static  静态方法
#### 静态方法特点
- 1带static的肯定是静态方法
- 2静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
- 3外部可以通过类来调用
```
static getInstance(){ }
```
### 静态类特点
- 外部怎么调用TS类的静态成员 ：类名直接调用静态成员 格式: 类名.静态属性， 类名.静态方法名 
- 静态基本属性：string number
- 静态引用属性：类 
- 对象类型也分为：对象基本数据类型和基本引用类型
- 静态方法调用静态方法可以用this
- 原型上的方法没有办法调用静态方法 
- 静态方法也没有办法调用原型上的属性和方法
- 对象属性也无法被静态调用
- 静态只有一个空间 
```
 
```
是否执行空间取决于类型，和 静态关键字无关

### 一个静态方法改变了某个静态方法属性，其他的静态方法或者外部访问这个属性都会发生变化
```

```
### 静态成员保存在内存哪里?何时分配的内存空间呢?
- 任何一个TS类中的静态成员存储在内存的静态区,运行一个TS类,TS首先会为静态成员开辟内存空间,
- 静态成员的内存空间分配的时间要早于对象空间的分配,也就是任何一个对象创建之前TS就已经为静态成员分配好了空间。
- 但一个静态方法只会分配一个空间,只要当前服务器不重启或控制台程序还没有结東之前【如果是开发期间临时测试,一般用控制台】,那么静方法就一直存在内存空间,无论调用多少次这个静态方法,都是调用的同一块空间
### 总结静态方法
- 1:无论你是否创建对象,创建多少个对象,是否调用该静态方法或静态属性,TS都会为这个静态方法或静态属性分配内存空间,注意: $\color{#FF0000}{静态成员和对象无关}$
- 2:一旦为静态方法或静态属性分配好空间,就一直保存到内存中,直到服务器重启或者控制台程序执行结

### new一个Ts类的方法可以吗?能在TS类外部使用 prototype为TS类增加方法或属性吗?

- 虽然在js中可以ηew一个类【构造函数】内部定义的对象方法或静态方法,
- 但TS已经屏蔽了去new一个类中的方法【Js可以,会当成一个构造函数】，ts不能new静态方法
- Ts类可以访问 prototype原型对象属性,但无法在 prototype原型对象属性增加新的方法或属性,这么做,就是让我们只能在类的内部定义方法,防止回到ES5从前非面向类和对象的而写法。可以覆盖，但不能增加

### 静态方法或属性和原型对象空间上的方法或属性有何区别?
- 原型对象空间上的方法和属性提供该类的对象变量共用的方法或属性,没有对象和对象变量,原型上的属性和方法就没有了用武之地
- 而静态方法或静态属性属于类,可以通过类来直接访问。任何一个对象创建之前TS就已经为静态成员分配好了空间。
  
- $\color{#FFFF00}{一个静态方法或静态属性只会分配一个空间}$,
- $\color{#00FFFF}{而毎一个对象都有自己独立的空间}$,

### 静态方法是否可以接受一个对象变量来作为方法的参数?
- 答:可以,静态方法内部不能通过this来访问对象属性和方法,但可以通过调用静态方法时把对象变量传递给静态方法来使用
### 何时应该把一个方法定义成静态方法或属性定义为静态属性呢?【应用】
 #### （1）不能在外部创建对象属性和对象方法
 #### （2） 当类中某个方法没有任何必要使用任何对象属性时,而且使用了对象属性反而让这个方法的逻辑不正确,那既如此,就应该禁止这个方法访问任何对象属性和其他的对象方法,这时就应该把这个方法定义为静态方法。
 例如:一个顾客类的购买方法【buy方法】中肯定要允许访问顾客姓名或其他顾客微信这些对象属性,这样的方法我们就需要定义在原型对象属性上,但  如果顾客类中的阅读顾客积分公告方法【 readnotice方法]是针对全体顾客的公告方法,就应该定义为静态方法,方法内部就应该禁止岀现仼何具体的对象属性。如果在这样的方法中使用了顾客的某个属性,比如用了顾客姓名,那么这个方法逻辑就不正确
 $\color{#FF7D00}{【这个方法就会说:你让我向全体顾窨展示公告,你我要知道每个顾窨姓名做什么?】。}$
 所以我们应该让这样的方法禁止访问对象属性和其他的对象方法,那就应该设置为静态方法, $\color{#FF7D00}{每个顾客进来看到的都是相同的内容}$
 ####  （3） 当一个类中某个方法只有一个或者1-2个对象属性,而且更重要的是, $\color{#FF7D00}{你创建这个类的对象毫无意义}$,我们只需要使用这个类的一个或者多方法就可以了,那么这个方法就应该定义为静态方法。常见的工具类中的方法通常都应该定义为静态方法。
 比如 工具类都应该是静态方法， String Util, Fileutil等,我们以 Fileutil为例进行讲解
  $\color{#FF7D00}{比如 工具类都应该是静态方法， String Util, Fileutil等}$我们使用的工具都是一样的，不会因为使用不同，有不同变化 

   ####  （4）对于第9项思考题中的关于使用静态属性或静态方法的解决方案绝对不能用在学生,顾客其他应用场景,那样会导致三个比较严重的向问题,以学生对象为例

  - 1.浪费了很多不必要的内存空间运行一开始就为大量的静态属性和大量的静态方法分配内存空间【但很可能某个静态方法一直没有使用,白白的一直占用着内存空间】 $\color{#FF7D00}{静态方法是一直不释放空间的}$
  - 2.无法展示一个学生一个对象的直观效果,完全失去了对象来描述实体的优势!
  - 3.最严重的问题是:属性值一变则都变所有操作都在用一个静态方法空间来完成某种功能,一旦某个操作改变了静态方法中的某个值,比如改变了学生姓名,则其他操作访问到这个静态变量看到的结果全变了$\color{#FF7D00}{多个值共用一个属性，这个属性被改变，所有访问这个值的内容全变了}$

  

### 继承 
父类定义公共内容 
- 私有的不能被继承
- 私有的不能被重写
```
class Vechile {
    public brand: string;//品牌
    public vechileno: string;//车牌号
    public days: number;//租赁天数
    // public total: number;//支付的租赁总费用
    public deposit: number;//押金
    constructor(brand_: string, vechileno_: string, days_: number, deposit_: number) {
        this.brand = brand_
        this.vechileno = vechileno_
        this.days = days_
        this.deposit = deposit_
    }
    //父类可以被重写
    public calculateRent() {
        return 2
    }
    //私有的不能被重写
    private calculateCSiYou(){

    }
    //protected可以在本类和子类应该 不能在类的外部使用
    protected paydesposit2(){

    }
}
```
子类继承父类
```
class Car extends Vechile {
    
}
```
子类的构造函数
- super()执行父类的构造函数     super=== Vechile.prototype
- 当子类中要写constructor时，必须调用父类的构造函数
- super可以在子类中获取父类重写的方法 
- 子类可以获取到父类已经存在的方法功能
```
//子类继承
class Car extends Vechile {
    constructor(brand_: string type_: string) {
        super(brand_) 
        this.type = type_
    }
    public calculateRent() {
    // super.calculateRent()//子类可以获取到父类已经存在的方法功能
    }
}
```

子类重写父类方法:[override]
- 一定发生在继承当中
- 应用场景:当父类中方法的实现不能满足子类功能时,就需要在子类中进行
  
定义规则:
- 1.和父类方法同名
- 2.参数和父类相同,如果是引用类型的参数,需要依据具体类型来定义。
-  3.父类方法的访问范围【i问修饰符】必须大于子类中方法重写的访问范围【访问修饰符】
```

```
修饰符权限
- 子类的修饰范围不能小于父类
- 子类访问修饰符应该大于父类访问修饰符
- 父类的方法不能是private
- 
# 类型断言
### TS类型断言定义:把两种能有重叠关系的数据类型进行相互转换的一种TS语法,把其中的一种数据类型转换成另外一种数据类型。类型断言和类型转换产生的效果一样,但语法格式不同。
###  TS类型断言语法格式:A数据类型的变量 as B数据类型。A数据类型和B数据类型必须具有重叠关系
### 类型断言要求
- A和B都是类,并且有继承关系
- A和B都是类 没有继承关系，A和B 公有属性public 实例上的方面完全相同 可以互相断言
- 利用implements可以互相断言 接口
```
//a是数据变量， b是数据类型
a as b
```

### 断言用法
```
// 可能是number也可能是string
function selfmutiply(noe: string | number) {
    //会报错
    return noe + 2
    //断言成number就不会报错
    return noe as number + 2
}
```
### 断言后可以调用断言上面独有的方法，不断言只能用公有方法 

### 任何类型都可以转成any或者unknown类型 any或unknown类型也可以转成任何其他数据类型
```
function selfmutiply(noe: string | number) {
    //都不会报错
    return noe as any 
    return noe as unknown 
}
```

### 类型守卫
typeof和instanceof都可以用于类型守卫
```
  if (Vechile2 instanceof Car2) {}
  if (typeof) {}

```
缩小类型范围
```
rentVecheile(Vechile2: Bus | Truck | Car2) {
    //联合类行只会，拥有重叠的方法和属性
    // Vechile2.checkIsWeiGui(true)  //报错，不是共有属性
    if (Vechile2 instanceof Car2) {
        Vechile2.checkIsWeiGui(true)  // 不会报错：缩小类型推断行为
    }
}
```

### TS多态
多态的定义:父类的对象变量可以接受任何一个子类的对象从而用这个父类的对象变量来调用子类中重写的方法而输出不同的结果.
```


```

## 在函数内容写的都会用unknown类型 ，不想用这个变量在内部获取其他属性的时候 unknown类型


### 自定义守卫 守卫类型
返回布尔值的条件表达式赋予类型守卫的能カ,只有当函数返回tue时,形参被确定为str类型
```
function isString(str: any): str is string {
    return typeof str === 'string'
}
```  
## 接口interface
```
interface Array<T>{}
```
## object为什么不能替代类上的泛型?
- Object可以待办任何类型的父类，小写object只能代表对象类型
### 原因一:编译期间 object无法进行类型安全检查,而泛型在编译期间可以进行类型安全检查
- object接受也只能接受所有的 object类型的变量,比如有 Customer、 Student、Dog类的实例都是对象类型,或者自己定义的对象,都可以传递给 object类型的方法参数或属性,但如果我们只希望添加 Customer类的对象,当添加其他类的对象必须出现编译错误,但是 object无法做到,就只能用泛型了。
###  object类型数据无法接受非σbject类型的变量,只能接愛σbject类型的变量,泛型能轻松做到
- 正因为 object接受也只能接受所有的 object类型的变量,那么如果有一个集合类数组封装类]有一个add方法,允许每次添加指定类型的变量到add方法的参数,比如:我们第-轮的希望添加10次字符串类型的变量,第二轮的希望添加10次整数类型变量,第三轮的希望添加10次顾客类型的变量,泛型轻松做到。 bject类型数据无法接受任意非 object类型的变量, object只能接受所有的 object类型的变量。
### 原因三: object类型数据获取属性和方法时无自动
- 提示种泛型类型被具体化成某种数据类型后,该数据类型的变量获取属性和方法时会有自动提示,提高代码开发效率和减少出错率,但在 object类型的变量无法获取数据类型的属性和方法,降低了体验感和开发效率。

### object Object unknown any的用法差不多
Object 有一半any的属性，有方法和属性
unknown 类型不明确，只是代表一种父类类型
object  小写的只能代表对象类型 

## any为什么不能替代类上的泛型?
### 原因一:编译期间any无法进行类型安全检查,而泛型在编译期间可以进行类型安全检查
- 我们学过:any是所有类型的父类,也是所有类型的子类如果我们现在是一个宠物店类,希望只能添加Dog类,当调用add方法添加 Customer、 Student类必定出现编译错误,从而保证了类型安全检查,但是any类型无法保证类型安全检查,可以为任意类型,包括 string, number, boolean,nul, undefined, never,void, unknown基础数据类型和数组,类,接口类型,type类型的变量全部能接受,不会进行无法进行类型安全检查。

### 原因二:any扩大数据类型的属性后没有编译错误导致澘在错误风险,而泛型却有效的避免了此类问题发生
- any类型可以获取任何属性和任意方法而不会出现编译错误,因为aηy可以代表仼意数据类型来获取仼意属性和任意方法,但是泛型类型被具体化成某种数据类型后,该数据类型的变量调用该数据类型之外的属性和方法时,出现编译错误,这也减少了代码隐藏潜在错误的风险。

### 原因三:any类型数据获取属性和方法时无自动提示,泛型有自动提示

### Dao【数据访问层 】

## 泛型约束
```
export default class Pager<T extends object> {}
```
