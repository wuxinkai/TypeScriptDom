// 为什么要用泛型类【好处】
// 好处1:编译期对类上调用方法或属性时的泛型类型进行安全检查(类型安全检查),不符合泛型实际参数类型(泛型实参类型)就编译通不过,防止不符合条件的数据增加进来。
// 好处2:一种泛型类型被具体化成某种数据类型后,该数据类型的变量获取属性和方法时会有自动提示,这无疑提高代码开发效率和减少出错率


// 泛型一种参数化数据类型,具有以下特点的数据类型叫泛型:
// 特点一:定义时不明确使用时必须明确成某种具体数据类型的数据类型。
// 特点二:编译期间进行数据类型安全检查的数据类型。


// 特别注意
// 1.类型安全检查发生在编译期间
// 2.泛型是参数化的数据类型,使用时明确化后的数据类型就是参数的值

class ArrayList {
    //放到第一步
    public element: Array<object>
    constructor() {
        //创建空数组
        this.element = []
    }
    //
    public index: number = 0;
    //获取
    get(index: number) {
        return this.element[index]
    }
    //数组添加元素
    public add(ele: object) {
        this.checkIndex()
        this.element[this.index++] = ele
    }
    //判断是否大于0
    public checkIndex() {
        if (this.index < 0) {
            throw new Error("数组下标不能为零")
        }
    }

    //索引数字删除： 返回数字  
    //对象删除返： 回删除的这一项
    remove(value: number): number
    remove(value: object): object
    remove(value: number | object): number | object {
        this.element = this.element.filter((ele, index) => {
            //把判断类型写到项目里面，这样比较好
            if (typeof value == 'number') {
                return value !== index
            } else {
                return value !== ele
            }
        })
        //返回值是传递的值
        return value
    }
    show() {
        this.element.forEach((ele) => {
            console.log("剩余内容", ele)
        })
    }
}


let data1 = { id: 1, type: 'car', myName: "奇瑞" }
let data2 = { id: 2, type: 'car', myName: "比亚迪" }
let data3 = { id: 3, type: 'iphone', myName: "小米" }
let data4 = "qwertyui"

// let arrLsit = new ArrayList([data1, data2, data3])
let arrLsit = new ArrayList()

arrLsit.add(data1)
arrLsit.add(data2)
arrLsit.add(data3)
//类型错误
// arrLsit.add(data4)



console.log(arrLsit.get(0));
// D:\1knowledge\TypeScript\TypeScriptDom\src\fangFaChongZai> ts-node  .\01fangfa.ts
