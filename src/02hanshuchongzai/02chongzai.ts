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

let messages2: Message[] = [
    { id: 1, type: 'image', sendmessage: "你好啊，奇瑞" },
    { id: 2, type: 'image', sendmessage: "你好啊，比亚迪" },
    { id: 3, type: 'audio', sendmessage: "你好啊，小米" },
    { id: 4, type: 'audio', sendmessage: "你好啊，联想" },
    { id: 5, type: 'image', sendmessage: "你好啊，华为" },
]

//不用函数重载, 有可能返回一条数据，也有可能返回一个数组 ,还可能是undefined
function getMessge(value: number | MessageType): Message | undefined | Array<Message> {
    if (typeof value === "number") {
        return messages.find((msg) => { return value === msg.id })
    } else {
        return messages.filter((msg) => { return value === msg.type })
    }
}

// 取交集
// let str =string|number
// str.xxx  //只能拿到两个类型的交集



//类型“Message | Message[]”上不存在属性“sendmessage”。
// 类型“Message[]”上不存在属性“sendmessage”。
//这是一种联合类型数据，联合类型都的有两种属性
//TS没有办法根据运行前传递的值，来推导出结果的数据类型
// console.log(getMessge("audio").sendmessage)

// 转成Message 来获取属性
let msg = (<Message>getMessge(1)).sendmessage
console.log('转换类型后获取数组对象中的属性----------  ',msg)


export { }