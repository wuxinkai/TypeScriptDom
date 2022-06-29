
//设置形参类型
// function 函数名（形参：参数类型【大多会是any】）：形参is A类型{
//     return true 或者false
// }


//理解:返回布尔值的条件表达式赋予类型守卫的能カ,只有当函数返回tue时,形参被确定为A类型

//如果是字符串类型就把str 转成支持类型
function isString(str: any): str is string {
    return typeof str === 'string'
}

//是字符串 value.上有很多 字符串常用方法
// let value ="qwerty"
// if( isString(value)){
//     value.

// }


//不是字符串，value.上面没有任何方法
// let value =12345
// if( isString(value)){
//     value.
// }

