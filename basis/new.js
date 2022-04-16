// 如果构造函数内部有return语句，而且return后面跟着一个对象，
// new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false

// 另一方面，如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"