function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments)
  // 取出构造函数
  var constructor = args.shift()
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype)
  // 执行构造函数
  var result = constructor.apply(context, args)
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return typeof result === 'object' && result != null ? result : context
}

// 实例
// var actor = _new(Person, '张三', 28)
//为了保证构造函数必须与new命令一起使用，一个解决办法是，
//构造函数内部使用严格模式，即第一行加上use strict。这样的话，一旦忘了使用new命令，直接调用构造函数就会报错。

function Fubar(bar){
  // 'use strict';
  this._foo = 100;
  this._bar = bar;
}

console.log(Fubar(),_foo)// TypeError: Cannot set property '_foo' of undefined