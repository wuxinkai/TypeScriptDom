type MessageType = "image" | "audio" | string

type Message = {
    id: number;
    type: MessageType;
    sendmessage: string;  
}

//和下面写法一样 
let messages: Array<Message> = [
    { id: 1, type: 'image', sendmessage: "你好啊，奇瑞" },
    { id: 2, type: 'image', sendmessage: "你好啊，比亚迪" },
    { id: 3, type: 'audio', sendmessage: "你好啊，小米" },
    { id: 4, type: 'audio', sendmessage: "你好啊，联想" },
    { id: 5, type: 'image', sendmessage: "你好啊，华为" },
]

//这是重载签名  重载签名可以有多个
function getMessge(id: number): Message

function getMessge(msgType: MessageType): Message[]

//实现签名函数： 最靠近函数体的 ，不能被调用 
function getMessge(value: number | MessageType): Message | undefined | Array<Message> {
    if (typeof value === "number") {
        return messages.find((msg) => { return value === msg.id })
    } else {
        return messages.filter((msg) => { return value === msg.type })
    }
}



//重载要放到 现实函数的上面 ,这样就可以获取对象上的某一个属性
let msges = getMessge(1).sendmessage

let msges2 = getMessge("audio")

console.log(msges)

console.log(msges2)
//函数重载定义
// 函数签名 = 函数名称+函数参数+函数参数类型+返回值类型四着合成

// 函数签名不包括函数体

// 函数重载：一组函数名称相同,

// 实现签名和重载签名都是函数签名都包括 函数名称+函数参数+函数参数类型+返回值类型四着合成

// 规则1 ：有一个现实签名 + 多个重载签名合成    
// 规则2： 外部函数调用重载定义的函数时，只能调用重载签名，不能调用现实签名 
// 规定3： 调用重载函数时  会根据传递的参数来判断你调用的是哪个函数
// 规则4： 只有一个函数体 只有实现签名配置了函数体，所有重载签名都只有签名 没有匹配函数体
// 规定5： 实现签名必须兼容所有重载签名该位置的参数(联合类型 或者any或者unknown类型的一种)
// 规定6： 必须给重载签名提供返回值类型，ts无法默认推导


export { }