
new PromiseA((resolve,reject)=>{
   resolve('成功')
  
}).then(data=>{
console.log(data)
},err=>{
  console.log(err)
})

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class PromiseA{
        constructor(exe){
            this.success = undefined;
            this.fail = undefined;
            this.status = PENDING;
             const resolve = (data)=>{
                      if(this.status===PENDING){ //状态职能从pending到FULFILLED
                        this.success = data
                        this.status = FULFILLED;
                      }
             }
             const reject = (data)=>{
                      if(this.PENDING){
                        this.fail = data;
                        this.status = REJECTED;
                      }
             }
             exe(resolve,reject)
        }

        then(A,B){ //A、B本身是两个函数,本质上A、B只是两个参数，分别接受成功和失败的参数，并执行相应的逻辑，所以这里需要一个状态
          
        if(this.status===FULFILLED){
             A(this.success)
        }
        if(this.status===REJECTED){
             B(this.fail)
        }
             
        }
}
