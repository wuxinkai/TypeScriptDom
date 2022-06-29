//存储
window.localStorage.setItem("count", "31")

let loginObj = { userName: "小米", age: 20 }
window.localStorage.setItem("loginUser", JSON.stringify(loginObj))

//获取代码
let value = window.localStorage.getItem("loginUser")

value != null ? JSON.parse(value) : null;

console.log(value);

// 问题1 代码零散
// 问题2 可读性差
// 问题3 后期维护差
// 问题3  JSON.stringify  JSON.parse 用的多影响性能

// 单利设计模式 :、只能创建一个空间
// 把构造器设置为私有， 不允许创建类和实例【对象】
// 至少提供一个外部访问的方法和属性，外部可以通过这个方法或属性，得到一  所以把这个方法设置成静态方法
// 外部调用 第二部提供的静态方法获取一个对象

export default class MyLocalStorsge{
    //静态方法，私有的 
    private constructor(){

    }
    // 公共方法 ，外部可以通过这个属性和方法
    //static是静态方法
    // 静态方法特点
    // 1带static的肯定是静态方法
    // 2静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
    // 3外部可以通过类来调用
    public static getInstance(){

    }
}
