import OrderDetail from "./orderDetail";
//简写方式ccc
class Order {
    constructor(public orderId: number, public date: Date, public custname: string, public phone: string, public orderDetailArray: Array<OrderDetail>) {

    }
}

//日期
var orderDate = new Date(2022, 10, 13, 5, 20, 0)
//订单详情

let orderDetailOne = new OrderDetail(10, "电视剧", 5000, 3)
let orderDetailTow = new OrderDetail(11, "桌子", 2000, 5)
let orderDetailThree = new OrderDetail(12, "椅子", 100, 6)


//写法2
let order = new Order(1, orderDate, '华为', '33333', [orderDetailOne, orderDetailTow, orderDetailThree])
console.log(order)


//执行命令  PS D:\1knowledge\TypeScript\TypeScriptDom\src\order> ts-node  .\orderJIanXie.ts 