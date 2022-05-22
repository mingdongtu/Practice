/**
 * 1. 手写promise
 * 2. 手写call
 * 3. 手写apply
 * 4. 手写bind
 * 5. 手写throttle
 * 6. 手写debounce
 */


//  promise



const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED';
class PromiseA{
          constructor(exe){
                  this.success = undefined;
                  this.fail = undefined;
                  this.status = PENDING;
                  this.onResolve = [];
                  this.onReject = [];
                 const resolve = (data)=>{  //data 成功的参数，还会传递到then
                      this.status = FULFILLED
                      this.success = data  
                      this.onResolve.forEach(fn=>fn(data))  
                 }
                 const reject = (data)=>{
                      this.status = REJECTED;
                      this.fail = data
                      this.onReject.forEach(fn=>fn(data))
                 }
                 exe(resolve,reject)
          }
          then(A,B){ //A、B成功和失败的回调，所以还要有记录promise状态(默认就三种)的参数
            //如果执行到then里面来时，状态还是pending，那么就需要把A、B函数放到一个队列里面，然后将这个队列共享到类的全局状态里去，在resolve和reject中调用
             if(this.status===FULFILLED){
                  A(this.success)
             }
             if(this.status === REJECTED){
                  B(this.fail)
             }
             if(this.status===PENDING){
                 this.onResolve.push(A);
                 this.onReject.push(B); 
             }
          }
}

new PromiseA((resolve,reject)=>{
  setTimeout(()=>{
     resolve('成功')
  },1000)
}).then((data)=>{
console.log(data)
},(err)=>{
console.log(err)  
})