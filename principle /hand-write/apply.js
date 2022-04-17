let obj = {
  name: "一个"
}

function allName(firstName, lastName) {
  // console.log(this)
  console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
}
// allName.apply(obj, ['我是', '前端'])

Function.prototype.applyA = function(obj,arg){
     //首先获取调用函数的对象,将其作为obj的子对象
     if(obj){
          obj.parent = this;
          obj.parent(...arg)
          delete obj.parent
     }else{
        this()
     }
}
allName.applyA(obj,['我是', '前端'])

