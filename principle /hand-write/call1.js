



let Person = {
  name: 'Tom',
  say() {
      console.log(this)
      console.log(`我叫${this.name}`)
  }
}

// 先看代码执行效果
Person1 = {
  name: 'Tom1'
}

// 我们尝试用原生方法call来实现this指向Person1
Function.prototype.MyCall = function(context) {
  //context就是demo中的Person1
  // 必须此时调用MyCall的函数是say方法，那么我们只需要在context上扩展一个say方法指向调用MyCall的say方法这样this

  context.say = this||window //Mycall里边的this就是我们虚拟的say方法
  context.say()
}
// 测试
Person.say.MyCall()//我叫Tom1


