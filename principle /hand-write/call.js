let obj = {
  name: "一个"
}

// const allName=(firstName, lastName)=> {
//   console.log(this,1111)
//   console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
// }
 function allName(firstName, lastName){
  console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
}
// 很明显此时allName函数是没有name属性的
// allName.call(obj, '我是', '前端') //我的全名是“我是一个前端” this指向obj

/**
 * 分析
 * 1. call是所有函数的一个方法，那么意味着这个方法是绑定到方法的原型上的
 * 2. 它接收N个参数，其中第一个是一个对象，其他参数是可选，目的是让当前函数执行，把context替换成第一个参数
 * 3. 
 * 
 */

// const A = function(){}
// Function.prototype.b = 100;
// console.log(A.b)

function C(){
    console.log(99999)
}

//为了防止我们在obj上自定义的属性已经存在
function mySymbol(obj){
     let unique = new Date().getTime().toString().slice(0,8);
     if(obj.hasOwnProperty(unique)){
         return mySymbol(obj)  //递归找到唯一值
     }else{
         return unique
     }
}
Function.prototype.callA  = function(obj,...arg){
    //首先判断obj是否存在
    if(!obj){ //不存在那就是直接执行父对象
      console.log("没有参数")
          const child = this;
          child()
    }else{
      //获取父级对象
      const child = mySymbol(obj)
      obj[child]= this; //将父对象挂载到obj上,给一个任意属性，这样obj就是this的父对象了
      //执行父对象,并改变父对象上下文
      obj[child](...arg)  
    }
        
};

allName.callA(obj, '我是', '前端') //我的全名是“我是一个前端” this指向obj

C.callA()



