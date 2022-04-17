// const promise = new Promise((resolve, reject) => {  // promise 可以是一个类，接受的两个作为参数的函数，目的是作为执行resolve的载体，就是一个普通函数,所以它跟resolve和reject处在同一个作用域
//   resolve('成功');  //本质上resolve是用来传递成功状态下的数据的，向then里的函数
// }).then( //then 是promise的一个实例方法，用来接收和处理resolve传递数据的
//   (data) => { //用来处理成功状态（fulfilled）情况下的数据
//     console.log('success', data)
//   },
//   (err) => { //用来处理失败状态rejected情况下的数据
//     console.log('faild', err)
//   }
// )

//固定的三个状态 
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class PromiseA{
         constructor(exe){
              this.status = 'PENDING'
              this.success = undefined;
              this.fail = undefined;
              
              const resolve = (data)=>{
                    //PENDING状态下才会执行，且只执行一次
                    if(this.status===PENDING){
                          //状态转变为FULFILLED，且将成功后的数据传递出去便于then执行中去使用
                         this.status = 'FULFILLED';
                         this.success = data

                    }
              }
              const reject = (data) =>{
                     if(this.status===PENDING){
                          this.status = 'REJECTED';
                          this.fail = data;
                     }
              }
              // 此时将resolve和reject传入到exe 执行
           exe(resolve,reject)
         } 
         then(A,B){
             if(this.status===FULFILLED){
                 A(this.success)
             }
             if(this.status===REJECTED){
              B(this.fail)
             }
         }
}
new PromiseA((resolve,reject)=>{
    //  resolve('成功')
    reject("失败")
}).then(data=>{
  console.log(data)
},err=>{
    console.log(err)
})