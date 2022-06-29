//
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

function getMessge(value: MessageType): Message[]

//****************设置类型************** */

//unknown:任何类型都是unknown类型的子类
// function getMessge(value: unknown): Message | undefined | Array<Message> {

// any:可以兼容任何类型，他既是任何类型的父类，也是任何类型的子类
function getMessge(value: any): Message | undefined | Array<Message> {
    if (typeof value === "number") {
        return messages.find((msg) => { return value === msg.id })
    } else {
        return messages.filter((msg) => { return value === msg.type })
    }
}



//重载要放到 现实函数的上面
let msges = getMessge(1)

let msges2 = getMessge("audio")

console.log(msges)

console.log(msges2)



export { }