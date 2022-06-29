// 函数和方法的区别
// Ts类中定义的函数都是方法
// 接口内容定义的函数时方法
// type 内容定义的函数时方法
// 方法签名：和函数签名一样  方法名称+方法参数+方法参数类型+返回值类型四着合成

// 方法 是一种特定场景下的函数 有对象变量【实例变量】直接调用的函数都是方法

// set 取值不方便的

// map  有一个唯一的key 去找value用map是比较方便的




// 1对现有数组封装
// 2提供get方法 remove方法显示方法[add方法]

class ArrayList {
    constructor(public element: Array<object>) {

    }
    //
    get(index: number) {
        return this.element[index]
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

let arrLsit = new ArrayList([data1, data2, data3])


// console.log(arr.show())


//

//删除返回当前删除的这一项
let val1 = arrLsit.remove(0)
console.log(`索引`, val1)

let val2 = arrLsit.remove(data2)
console.log(`对象`, val2)


arrLsit.show()
// D:\1knowledge\TypeScript\TypeScriptDom\src\fangFaChongZai> ts-node  .\01fangfa.ts

export {    }
