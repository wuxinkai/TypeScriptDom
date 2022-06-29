//大厂TS类型守卫晋级考核题【综合题】:
//请编写一个操作对象方法和属性的函数实现以下功能
//1.当对象字符串属性有空格时就去掉空格后输出
//2.当遇到对象方法时就执行,其他数据类型的属性一律直接输出
//3.只有对象中包含a11 output属性时,才允许输出
//4.函数接收到外部传入的null, undefined,}时,直接输出不是一个合法的对象
//考核点:1.考核对类型守卫的熟练运用程度2.静态方法

interface TestInter {
    username: string,
    age: number,
    eat(): void,
    noallowinput?: 1
}

let textobj: TestInter = {
    username: ' wan gs ',
    age: 23,
    eat() {
        console.log("this")
        console.log(`${this.username}吃饭`)
    },
}

function porcessobjouter(obj: any) {

}

var datas = ' 1 2  3 4 5 '
//删除所有空格
console.log(datas.replace(/\s+/g, ""))
export { }  