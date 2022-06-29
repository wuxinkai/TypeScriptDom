//类型断言 和类型转换效果是一样的 


class People {
    public myusername!: string;
    public myage!: number;
    public address!: string

    constructor() {

    }

}

class Stu extends People {
    public userName!: string;
    public age!: number;
    public address!: string
    constructor(userName_: string, age_: number, address_: string,  public phone: string,) {
        super()
        this.address = address_
    }

    study() {

    }
}

let peple = new People()
//可以方法
// peple.address
// peple.eat
// peple.myage
// peple.myusername
// peple.step

//断言
let result = peple as Stu
//断言之后新增的方法
// result.address
// result.age
// result.eat
// result.myage
// result.myusername
// result.phone
// result.step
// result.study
// result.userName

//转换
let result2 = <Stu>peple
// result2.address
// result2.age
// result2.eat
// result2.myage
// result2.myusername
// result2.phone
// result2.step
// result2.study
// result2.userName

let stu = new Stu('wuangwu', 23, '北京', '123')

export { }