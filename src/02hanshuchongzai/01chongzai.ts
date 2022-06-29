// 函数重载，只要两个函数名相同就是重载
// 功能相同但细节不同，我们可以用函数重载来解决

// type 是用来定义类型的
// 图片 视频  id
//定义类型：MessageType只能接收，image，audio，string 这三个类型， 就好比 boolean只能接收 true和false一样
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

console.log(getMessge(1))
console.log(getMessge("audio"))
console.log(getMessge("image"))

export { }