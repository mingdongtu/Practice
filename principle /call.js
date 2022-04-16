
//call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。


var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
// a.call(window) // 123
a.call(obj) // 456

//如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法。



var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}

function add(a, b) {
  return a + b;
}

add.call(null, 1, 2) // 3


function fun() {
  console.log(this)
  return this;
}

// fun() // window
//将2转换成对象
console.log(fun.call(2) instanceof Object)  //true


function f0(){
 return function f1(a) {
  
    // console.log(f1.caller);    // 报错
    console.log(f1.arguments); // 报错
  }
}

f0()(100)