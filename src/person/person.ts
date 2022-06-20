class Person {
    //写在类上的都要体现吃类的本质特征变量

    public name: string | undefined //typescript4.0之前没有赋值的解决办法,增加一个undefined
    public age: number = 0 //初始化赋值
    public phone: string | undefined
    //数组 字符串
    public address:Array<string>=['北京市',"朝阳区","望京东"]
    //函数类型 
    //()=>void 函数类型，   
    // ()=>{} 函数类型赋值
    public resolve:()=>void=()=>{}

    public doEat(): number {
        // return '222' 不能将string类型分配给number
        return 2
    }

    public doEat2(who: string, address: string): void { // 方法默认的返回值为void
        console.log(`${this.name}和${who}在${address}吃饭`)
    }

    //原型上的内容 
    constructor(name_: string, age_: number, phone_: string) {
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
    }
}


// let zhangSanPerson = new Person()
// zhangSanPerson.name = "张三"
// zhangSanPerson.doEat2('李四', '王府井')

//执行 D:\1knowledge\TypeScript\TypeScriptDom\src\person>  ts-node person.ts


//通过构造器赋值

let zhangSanPerson = new Person('张2', 23, '1234567890')
zhangSanPerson.doEat2('李四', '北京')

//对象变量
console.log('对象变量', zhangSanPerson)


// 构造函数
// 1创建对象 分配空间
// 2调用对象构造函数，并且吧构造函数中的各个参数赋值给对象属性
// 3把对象赋值给对象变量