interface MouselistenerProcess {
    mouseReleased(e: any): void//鼠标按钮在组件上释放时调用
    mousePressed(e: any): void//鼠标按键在组件上按下时调用
    mouseEntered(e: any): void//鼠标进入到组件上时调用
    mouseClicked(e: any): void//鼠标按键在组件上单击(按下并释放)时调用
    mouseExited(e: any): void//鼠标离开组件时调用
}

//适配器Adapter： 根据需要适配需要的方法 适配器是一个抽象类
// 抽象+接口
// 具体的 必须用的写成抽象类
abstract class MyMouseListenerProcessAdapter implements MouselistenerProcess {
    mouseReleased(e: any): void {
        throw new Error("Method not  implements")
    }
    mousePressed(e: any): void {
        throw new Error("Method not implements")
    }
    mouseEntered(e: any): void {
        throw new Error("Method not implements")
    }
    mouseClicked(e: any): void {
        throw new Error("Method not implements")
    }
    mouseExited(e: any): void {
        throw new Error("Method not implements")
    }
}

// 接口用法
//继承
class MyMouseListenerProcess extends MyMouseListenerProcessAdapter {

}