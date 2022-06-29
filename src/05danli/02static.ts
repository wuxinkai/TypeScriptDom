//项目常用
// 外部调用这个方法就会创建，外部不调用就不会创建，
// 只有使用时候才调用被称为懒汉式单件设计模式  也叫延迟使用
export default class MyLocalStorsge {
    //静态属性和对象属性是类里面的两大成员
    static localStorage: MyLocalStorsge //引用数据类型   ，，，，MyLocalStorsge在这里只是一个类
    //静态基本类型属性
    static count: number = 3
    //私有的 
    private constructor() {
        console.log('只调用一次')
    }
    // 公共方法 ，外部可以通过这个属性和方法
    //static是静态方法
    // 静态方法特点
    // 1带static的肯定是静态方法
    // 2静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
    // 3外部可以通过类来调用
    public static getInstance() {
        //没有创建
        if (!this.localStorage) {
            //指向一个对象
            this.localStorage = new MyLocalStorsge()
        }
        //存在就把内容返回回去，
        return this.localStorage
    }

    //静态方法，调用静态方法可以用this
    public static other() {
        // this.getInstance
    }
    // 个静态方法改变了某个静态方法属性，其他的静态方法或者外部访问这个属性都会发生变化
    //静态属性的通用性
    public static setCount() {
        this.count++
    }
    public static getCount() {
        return this.count
    }


    //存储，存在原型上
    public static setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    //获取
    public static getItem(key: string) {
        let value = window.localStorage.getItem(key)
        value != null ? JSON.parse(value) : null;
    }
}
