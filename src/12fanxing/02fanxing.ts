// 泛型一种参数化数据类型,具有以下特点的数据类型叫泛型:
// 特点一:定义时不明确使用时必须明确成某种具体数据类型的数据类型。
// 特点二:编译期间进行数据类型安全检查的数据类型。


// 特别注意
// 1.类型安全检查发生在编译期间
// 2.泛型是参数化的数据类型,使用时明确化后的数据类型就是参数的值


// class 类名<泛型形参类型> 泛型形参类型必须是A - Z任何一个字母
// class ArrayList<T>{
//     array:Array<t>
//     add::(data:T){
//     }
// }

// 开始添加什么类型不确定， 占位符你传给我什么类型我就是什么类型
//参数化的数据类型
// class ArrayList<T=any> { //泛型给默认值
class ArrayList<T> {
    public element: Array<T>
    constructor() {

        this.element = []
    }
    public index: number = 0;

    get(index: number) {
        return this.element[index]
    }

    public add(ele: T) {
        this.checkIndex()
        this.element[this.index++] = ele
    }

    public checkIndex() {
        if (this.index < 0) {
            throw new Error("数组下标不能为零")
        }
    }
}

let data1 = { id: 1, type: 'car', myName: "奇瑞" }

//获取的数据类型

//第一种 直接获取数据类型
//（1）使用时候要明确数据类型, 
// 类型守卫可以获取 对象变量的数据类型
let arrLsit = new ArrayList<typeof data1>()
arrLsit.add(data1)

//第二种
//先定义类型
type valType = { id: number, type: string, myName: string, }
let val1: valType = { id: 1, type: 'car', myName: "奇瑞" }
let val2: valType = { id: 2, type: 'car', myName: "比亚迪" }
let val3: valType = { id: 3, type: 'iphone', myName: "小米" }
let arrLsit2 = new ArrayList<valType>()


class Customer {
    constructor(public name: string, public age: number) {

    }
}

let obj: object = new Customer("wangwu", 23)
let wamh = new Customer("wangwu", 23)

//传了一个类做完类型
let custArrayList = new ArrayList<Customer>()
custArrayList.add(wamh)

export { }