import MyLocalStorsge from './02static'

//带有静态关键字不会报错 ，不带静态关键字就会出波浪线
//不带静态关键字报错： 类型“typeof MyLocalStorsge”上不存在属性“getInstance”

//外部访问内容方法访问不到用static静态,写多个也只调用一次
// MyLocalStorsge.getInstance()
// MyLocalStorsge.getInstance()
// MyLocalStorsge.getInstance()
// MyLocalStorsge.getInstance()


//获取值
console.log(111,MyLocalStorsge.getCount())
//修改值
MyLocalStorsge.setCount()


//再次获取值
console.log(2222,MyLocalStorsge.getCount())