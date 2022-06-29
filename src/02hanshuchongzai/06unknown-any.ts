//子类传给父类 是没有问题的 
let x:number =3
let y:unknown =x

// 父类传给子类就会报错
// let x1:unknown =3
// let y1:number =x1


//any 既可以当子类也可以当父类 
let x2:number =3
let y2:any =x

// any 既可以当子类也可以当父类
let x3:any =3
let y4:number =x3
