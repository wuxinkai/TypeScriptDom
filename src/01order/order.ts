import OrderDetail from "./orderDetail";
class Order {
    // public第一步代表定义了一个属性，
    // 第二部默认构造函数会给这个属性赋值
    public orderId: number = 0
    public date: Date = new Date();
    public custname: string = "";
    public phone: string = "";
    // public orderDetail:OrderDetail[]=[]
    //原始类型等于基本数据类型
    // 订单详情
    //数组类型的引用属性
    public orderDetailArray: Array<OrderDetail> = [] //定义了一个数组, 数组中每一项都是订单详情类型的
    //区分局部变量和全局属性 用下杠 表示
    constructor(orderId_: number, date_: Date, custname_: string, phone_: string, orderDetailArray_: Array<OrderDetail>) {
        this.orderId = orderId_
        this.date = date_
        this.custname = custname_
        this.phone = phone_
        this.orderDetailArray = orderDetailArray_ //订单详情
    }
}

//日期
var orderDate = new Date(2022, 10, 13, 5, 20, 0)
//订单详情

let orderDetailOne = new OrderDetail(10, "电视剧", 5000, 3)
let orderDetailTow = new OrderDetail(11, "桌子", 2000, 5)
let orderDetailThree = new OrderDetail(12, "椅子", 100, 6)
//写法1 
// let orderDetailArray:Array<OrderDetail>=[orderDetailOne,orderDetailTow,orderDetailThree]
// let order = new Order(1, orderDate, '华为', '33333', orderDetailArray)

//写法2
let order = new Order(1, orderDate, '华为', '33333', [orderDetailOne, orderDetailTow, orderDetailThree])
console.log(order)