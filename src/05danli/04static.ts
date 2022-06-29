// 饿汉式设计模式  马上就要执行

// 1构造器私有
//2 建一个对象静态引用属性,要么数组，要么类
//3 外部

export default class MyLocalStorsge {
    //对象属性 【对象基本类型属性和对象的引用属性】
    //静态属性 【静态基本类型属性和静态的引用属性】
    static localStorage: MyLocalStorsge = new MyLocalStorsge();
    static count:number =3

    //私有的 
    private constructor() {
        console.log('静态构造器')
    }

    public static getInstance() {
     
    }

}