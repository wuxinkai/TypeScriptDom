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
function getMessge(value: number,myName:string): Message


function getMessge(image: MessageType, readRecordCount: number): Message[]

//********** 都编程any类型 ********** */
function getMessge(value:any, readRecordCount: any=1) {
    // console.log(myName)
    if (typeof value === "number") {
        return messages.find((msg) => { return value === msg.id })
    } else {
        return messages.filter((msg) => { return value === msg.type }).splice(0, readRecordCount)
    }
}

getMessge(1,"加了也没啥用，因为函数体内容用不到")


getMessge("image", 2).forEach((msg) => {
    console.log(msg)
})








export { }