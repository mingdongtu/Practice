let obj = {
  name: "一个"
}

function allName(firstName, lastName, flag) {
  // console.log(this)
  console.log(`我的全名是"${firstName}${this.name}${lastName}"我的座右铭是"${flag}"`)
}
// allName.bind(obj) //不会执行
// let fn = allName.bind(obj)
// fn('我是', '前端', '好好学习天天向上')

// // 也可以这样用，参数可以分开传。bind后的函数参数默认排列在原函数参数后边
// fn = allName.bind(obj, "你是")
// fn('前端', '好好学习天天向上')
/**
 * 分析
 * 1. 改变函数体的父级对象
 */
Function.prototype.bindA = function(context,...args){
    // context.child = this;
    const self = this;
    console.log('要返回的值',this)
    
     return function(){
         const newArgs = [...arguments].slice(0) //这个函数接收的参数
          //  console.log('bind传递的参数',newArgs.concat(args),args.concat(newArgs))
          return self.apply(context,args.concat(newArgs))
     };
    
}

// const fn = allName.bindA(obj,100)
const fn = allName.bind(obj,100)


fn( '前端', '好好学习天天向上')