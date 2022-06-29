
class Vechile2 {
    public total: number = 0;//总钱数
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
    safeShow() {
        console.log(`${this.brand}车牌：${this.vechileno}违规`)

    }
    //是受保护的访问修饰符【修饰符是用来控制方法或者属性访问范围的】
    //同一包内以及子类中可见
    //protected可以在本类和子类应该 不能在类的外部使用
    protected paydesposit2() {

    }
}


// 子类写法   汽车
//子类继承父类
class Car2 extends Vechile2 {
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
        this.total += this.days * this.getPriceByType()
        return this.total
    }
    //判断是否违规
    public checkIsWeiGui(isOvewrWeith: boolean) {
        if (isOvewrWeith) {
            this.total = this.total + 500
        }
    }
}

//卡车
class Truck extends Vechile2 {
    public type: string;//车的型号
    constructor(brand_: string, vechileno_: string, days_: number, deposit_: number, type_: string) {
        super(brand_, vechileno_, days_, deposit_)
        this.type = type_
    }
    //租金设置
    public getTruckyType() {
        let rentmoneyByDay: number = 0;//每天的租金
        if (this.type === "宇通") {
            rentmoneyByDay = 1000
        } else if (this.type === "比亚迪") {
            rentmoneyByDay = 2000
        } else if (this.type == "中通") {
            rentmoneyByDay = 3000;
        }
        return rentmoneyByDay
    }
    //计算天数
    public calculateRent() {
        return this.days * this.getTruckyType()
    }

}

//出租车
class Bus extends Vechile2 {
    public type: string;//车的型号
    constructor(brand_: string, vechileno_: string, days_: number, deposit_: number, type_: string) {
        super(brand_, vechileno_, days_, deposit_)
        this.type = type_
    }
    //租金设置
    public getBusType() {
        let rentmoneyByDay: number = 0;//每天的租金
        if (this.type === "奔驰") {
            rentmoneyByDay = 30
        } else if (this.type === "奥迪") {
            rentmoneyByDay = 50
        } else if (this.type == "宝马") {
            rentmoneyByDay = 60;
        }
        return rentmoneyByDay
    }
    //计算天数
    public calculateRent() {
        this.total += this.days * this.getBusType()
        return this.total
    }
}
//工具类都是静态方法
class StingUtil {
    //清楚页面空格
    public static trimSpace(str: string): string {
        return str.replace(/\s+/g, "")
    }
}
//
class Customer {
    rentVecheile(Vechile2: Bus | Truck | Car2) {
        //计算组件
        // Vechile2.checkIsWeiGui(true)  //报错，不是共有属性
        if (Vechile2 instanceof Car2) {
            Vechile2.checkIsWeiGui(true)  // 不会报错：缩小类型推断行为
        }

        return Vechile2.calculateRent()
        //断言成 bus类 ，就可以享有bug里的方法， 如果不断言就得用 Bus，Truck，Car2这三个里面，重叠的方法
        // (vechile as Bus).checkIsOverNum()
    }
}

let car3 = new Car2("普拉多", "京3A556", 4, 5000, '普拉多巡洋舰')
let cust = new Customer()
console.log(cust.rentVecheile(car3));
// if (car instanceof Vechile2) {
//     console.log(`Car3是Car2的实例对象变量`);
// }