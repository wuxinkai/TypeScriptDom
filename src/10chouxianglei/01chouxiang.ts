//一个在任何位置都不能被实例化的类就是一个抽象类
//抽象类
abstract class   People{
    public phone!: string;
    //抽象方法：当函数体里不写任何代码的时候可以定义为抽象方法
    public abstract eat():void
}
//不能被实例化
// let data= new People() //报错无法创建


//车 花这些都可以定义为抽象类，
// 奔驰，宝马，玫瑰这些都是具体的类 


// 继承父抽象类， 子类就必须重写父类方法，如果不加抽象类，子类是没限制的，