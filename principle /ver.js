function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
// S.prototype = Object.create(M1.prototype);
// // 继承链上加入 M2
// Object.assign(S.prototype, M2.prototype);

// // 指定构造函数
// S.prototype.constructor = S;

var s = new S();
s.hello // 'hello：'
s.world //
console.log(s.hello,s.world)