var n = 123;
var obj = { n: 456 };

function a(value) {
  console.log(this.n,value);
}

// a.call() // 123
// a.call(null) // 123
// a.call(undefined) // 123
// // a.call(window) // 123
// a.call(obj) // 456

Function.prototype.callA = function(...arg){
      //obj 变成父级对象
      const ob = arg.slice(0,1)[0]
      const rest = arg.slice(1)
      console.log(ob,rest,arg)
      if(ob){
        ob.child = this;
        ob.child(...rest)
      }else{
           this()
      }
      
}
a.callA(obj,100)

Function.prototype.applyA = function(obj,...arg){
           
}