console.log('shop')

// count权限报错是因为全局有定义这样的一个变量
let count: number = 11

console.log('shop打印', count)

// 红色波浪线 解决办法, 只在我这个文件进行搜索
export { }