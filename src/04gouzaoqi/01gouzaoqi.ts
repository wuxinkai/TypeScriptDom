type type_charParma = {
    width?: number,
    height?: number,
    radius?: number,
}

class Square {
    public width: number;
    public height: number;

    constructor(width_: number, height_: number) //重载签名
    constructor(value: type_charParma)//重载签名
    constructor(value: any, height_: number = 0) {//现实签名 //any可以给任何类型   ?代表可选参数，可有可无
        if (typeof value === 'object') {
            this.width = value.width;
            this.height = value.height;
        } else {
            this.width = value;
            this.height = height_;
        }
    }

    public getArea(): number {
        return this.width * this.height
    }
}

let square = new Square(40, 50)
console.log(square.getArea())
let chartParamObj: type_charParma = { width: 50, height: 50 }
let square2 = new Square(chartParamObj)
console.log(square2.getArea())