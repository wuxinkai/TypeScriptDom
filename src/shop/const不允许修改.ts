// Ts4 新特性
const arr = [10, 20, 30, 40, 'abc']
arr[0] = 100

//变成只读属性
const arr2 = [10, 20, 30, 40, 'abc'] as const
//会报错 无法分配元素，
// arr2[0]=100

// 数组也无法被修改
// arr2[0,20,30]


//获取数组类型
function showArr(arr: any[]) {

}
//报错，只读属性，内部不允许被修改
// showArr(arr2)

//不会报错，值可以被修改
showArr(arr)


//readonly只允许读取
function showArr2(arr: readonly any[]) {
    // arr[1] = 200
}

showArr2(arr)


// const 和函数的 readonly一起用， 不能修改