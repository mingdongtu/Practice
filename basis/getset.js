const func = {
      a:[100,99],
      get print(){
          console.log(this.a)  
      },
      set print(x){
           console.log("我要给你赋值",x)
      }
      
}
func.print = 100

//深入框架双向数据绑定，参考：https://blog.nowcoder.net/n/8517450fe4fd4220b4078f9c61e42ec1
// observer : 遍历所有的data 属性 给他们加上get和set
Object.defineProperty(obj, "name",{
  get(){       
      console.log("get方法被触发");
      dep.depend(); // 这里进行依赖收集
      return value;
  },
  set(val){       
      console.log("set方法被触发");
      value = newValue;
      // self.render();
      dep.notify();  // 这里进行virtualDom更新，通知需要更新的组件render
  }
})

// 等价于
const obj = {
     get name(){
      console.log("get方法被触发");
      dep.depend(); // 这里进行依赖收集
      return value;
     },
     set name(newValue){
      console.log("set方法被触发");
      value = newValue;
      self.render();
      dep.notify();  // 这里进行virtualDom更新，通知需要更新的组件render
     }
}
obj.name = 100