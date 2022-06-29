
let symid = Symbol("objid")
let obj = { [symid]: 101, username: "wangwu", age: 23 }
let username = obj["username"]
//可以转成any
// let userID = obj[symid as any]

//unknown 不能放到索引当中
let userID =  symid as unknown

console.log(username,userID)