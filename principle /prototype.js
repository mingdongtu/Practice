function Animal(name) {
  this.name = name;
}
Animal.prototype.color = 'white';
var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');


console.log(Animal.prototype.constructor===Animal) //true, 意味着所有实例都可以调用constructor
// console.log(cat1.constructor===Animal) //true
cat1.hasOwnProperty('constructor') // false
Animal.prototype.walk = function () {
  console.log(this.name + ' is walking');  //this指向实例，谁调用walk谁起作用
};
//创建世例后再在原型上加属性，实例同样会继承
console.log(cat1.walk())