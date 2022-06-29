//类型断言 和类型转换效果是一样的 


class People {
    constructor(public myusername: string, public myage: number, public address: string) {

    }
}

class Stu {
    // public myusername!: string;
    // public myage!: number;
    public address!: string
    constructor(myusername_: string, myage_: number, address_: string) {

    }
}

let peple = new People('wuangwu', 23, '北京')
let pepleConvert = peple as Stu

let stu = new Stu('wuangwu', 23, '北京')
let stusConvert = stu as People

export { }


// 可能是number也可能是string
function selfmutiply(noe: string | number) {
    //会报错
    // return noe + 2
    
    //断言成number就不会报错
    return noe as number + 2
}