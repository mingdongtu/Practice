Object.prototype.print = function(){
     let i = 10;
do{
  i++
   console.log('do',i)
}while (i< 15){
  //条件为false时执行
   console.log(i)
};

}
const A = new Object()
const B = function(){}
// const C = {}   
B.prototype.co = 100;
const D = new B()  // new 关键字后面一定是函数
//new constructor[([arguments])]
//一个指定对象实例的类型的类或函数。

console.log(D.co)
A.print()

// console.log(Object.prototype.toString.call({a:1}) == '[Object Object]')
console.log({}.constructor===Object)
