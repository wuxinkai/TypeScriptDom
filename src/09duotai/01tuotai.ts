class RenYuan {
    public name!: string;
    public eat() {
        console.log('父页面');
    }
}

class zhongGuo extends RenYuan {
    public phone!: string;
    public eat() {
        console.log('筷子');
    }
}
class meiGuo extends RenYuan {
    public name!: string;
    public eat() {
        console.log('叉子');
    }
}
class tuZhu extends RenYuan {
    public eat() {
        console.log('手');
    }
}

//输出不同结果
let people: RenYuan = new meiGuo()
people.eat()
people = new zhongGuo()
people.eat()
people = new tuZhu()
people.eat()

