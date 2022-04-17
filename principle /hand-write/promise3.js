
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class PromiseA{
      
      constructor(exe){
           this.success = undefined;
           this.reject = undefined;
           this.status = PENDING
           this.onResolveCallbacks = [];
           this.onRejectCallbacks = [];
           
           const resolve = (data)=>{ //执行的时候，一定异步成功返回了
                   if(this.status===PENDING){
                         this.status = FULFILLED;
                         this.success = data
                         this.onResolveCallbacks.forEach(fn=>fn())
                   }
           }
           const reject = (data)=>{
                   if(this.status===PENDING){
                         this.status = REJECTED;
                         this.fail = data;
                         this.onRejectCallbacks.forEach(fn=>fn())
                   }
           }
           exe(resolve,reject)
      }

      then(S,F){
          if(this.status===FULFILLED){
               S(this.success)
          }
          if(this.status===REJECTED){
               F(this.fail)
          }
          //如果状态还是为pending，那么就把这个成功和失败执行逻辑的函数存起来，等异步返回后在执行
          if(this.status===PENDING){
               this.onResolveCallbacks.push(()=>{
                    S(this.success)
               })
               this.onRejectCallbacks.push(()=>{
                    F(this.fail)
               })
          }
          
      }
}
new PromiseA((resolve,reject)=>{
  setTimeout(() => {
    resolve('成功');
  },1000);
 }).then(data=>{
 console.log(data)
 },err=>{
  console.log(err)
 })