
/*

汽车租赁管理功能【深度掌握继承需求1汽车租賃功能实现:
有小轿车,大巴,卡车三种类型的车,
顾客可以租任意一种或多种不同类型的车按照租用的天计算租金,
同时为了响应国家对各类车安全的管理,对在租賃期内有过各种超载,超乘客数,酒后驾车等违规的车需额外支付一定的费用。
需求2:计算退回费用:最终退回顾客的费用为押金扣除使用天数,如押金不足需额外支付不足部分。
思考小轿车大巴,
卡车共同属性:品牌( brand) Vechileno(车牌号)days(租赁天数) total(支付的租赁总费用) deposit(押金)思考小轿车,大巴,
卡车共同方法计算租賃车的价格( calculateRent)支付押金的方法( paydesposit)安全规则方法
*/
// Vechileno 交通工具

class Vechile {
    public brand: string;//品牌
    public vechileno: string;//车牌号
    public days: number;//租赁天数
    // public total: number;//支付的租赁总费用
    public deposit: number;//押金
    constructor(brand_: string, vechileno_: string, days_: number, deposit_: number) {
        this.brand = brand_
        this.vechileno = vechileno_
        this.days = days_

        this.deposit = deposit_
    }
    //计算租车价格
    public calculateRent() {
        return 2
    }
    //支付押金方法
    public payDesposit() {
        // console.log(`${this.brand}车牌：${this.vechileno}支付${this.total}`)
    }
    //安全规则方法
    paydesposit() {
        console.log(`${this.brand}车牌：${this.vechileno}违规`)

    }
    //是受保护的访问修饰符【修饰符是用来控制方法或者属性访问范围的】
   //同一包内以及子类中可见
   //protected可以在本类和子类应该 不能在类的外部使用
    protected paydesposit2(){

    }
}


// 子类写法
//子类继承父类
class Car extends Vechile {
    public type: string;//车的型号
    constructor(brand_: string, vechileno_: string, days_: number, deposit_: number, type_: string) {
        //super()执行父类的构造函数     super=== Vechile.prototype

        super(brand_, vechileno_, days_, deposit_) //当子类中要写constructor时，必须调用父类的构造函数
        this.type = type_
    }
    //根据车型号  租用车的价格
    public getPriceByType() {
        let rentmoneyByDay: number = 0;//每天的租金
        if (this.type === "普拉多巡洋舰") {
            rentmoneyByDay = 800
        } else if (this.type === "凯美瑞旗舰版") {
            rentmoneyByDay = 400
        } else if (this.type == "威驰智行版") {
            rentmoneyByDay = 200;
        }
        return rentmoneyByDay
    }
    //子类重写父类方法:[override]
    // 一定发生在继承当中
    //子类重写父类的方法
    public calculateRent() {
        // super.calculateRent()//继承父类
        //天数乘以价格
        // this, total = this.days * this.getPriceByType()
        return this.days * this.getPriceByType()
    }
}

let car = new Car("普拉多", "京3A556", 4, 5000, '普拉多巡洋舰')
console.log(car.brand,car.calculateRent())

let car2 = new Car("凯美瑞", "京3A556", 4, 5000, '凯美瑞旗舰版')
console.log(`${car2.brand} ,${car2.days}天,${car2.calculateRent()}块`)