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
    { id: 4, type: 'image', sendmessage: "你好啊，联想" },
    { id: 5, type: 'image', sendmessage: "你好啊，华为" },
]

//去找实现签名体，
function getMessge(value: number): Message


function getMessge(image: MessageType, readRecordCount: number): Message[]

//**************** readRecordCount: number=1 增加默认值，让第一个重载不报错************** */
function getMessge(value: number | MessageType, readRecordCount: number=1): Message | undefined | Array<Message> {
    if (typeof value === "number") {
        return messages.find((msg) => { return value === msg.id })
    } else {
        return messages.filter((msg) => { return value === msg.type }).splice(0, readRecordCount)
    }
}

getMessge(1)


getMessge("image", 2).forEach((msg) => {
    console.log(msg)
})








export { }