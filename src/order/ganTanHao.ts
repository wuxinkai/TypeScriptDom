
class GanTanHaos {
    //  TS4真对不知道是什么类型用感叹号表示
    public price2: number | undefined;
    public price!: number;
    public count!: number;
    constructor( price_: number, count_: number,) {

        this.price = price_
        this.count = count_
    }
    //不会报错
    public getTotal(): number {
        return this.count * this.price
    }
    //会报错
    // public getTotal2(): number {
    //     //
    //     // 就相当于 return undefined * this.count
    //     return this.price2 * this.count
    // }
}


var gthData = new GanTanHaos(20, 30)
console.log(gthData.getTotal())
