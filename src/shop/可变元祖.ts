//格式用可能不完全固定，
//前面2个固定，后面都不固定
//  ...any[]  和 ...unknown[] 都可以解决

// let [username, age]: [string, number, ...any[]] = ["小王", 23, "北京朝阳", "214323432432", "一路同行一起发"]


//可变元祖
// let [username, age, ...rest]: [string, number, ...any[]] = ["小王", 23, "北京朝阳", "214323432432", "一路同行一起发"]
// console.log(username, age)
// console.log('接收剩余参数', rest)


//在元祖前面加标签
let [username, age, ...rest]: [name_:string, age_:number, ...rest:any[]] = ["小王", 23, "北京朝阳", "214323432432", "一路同行一起发"]
console.log(username, age, ...rest);


export { }