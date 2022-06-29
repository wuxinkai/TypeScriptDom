
// descri_: string 最后一个必须是字符串类型
let [username, age, ...rest]: [name_: string, age_: number, ...rest: any[]] = ["小王", 23, "北京朝阳", "214323432432", "一路同行一起发"]
console.log(username, age, rest)


let constnum2 = [10, 30, 40, "abc"]

//报错不兼容
// let [x2,...y2]:[number,...any[]] = constnum2

//把元组退换成数组。可以接收任何数据类型
let [x2,...y2]: [...any[]] = constnum2


// readonly和as const 都是表示固定不变的的 ， 包括了数组的元祖和元祖中的每一个
console.log(y2);
export { }