
/**
 * 分析
 * 1. 首先promise有一个then方法
 * 2. then方法接收两个回调函数作为参数
 * 3. 成功的回调函数success，接收一个成功的参数s
 * 4. 失败的回调函数fail，接收一个失败的参数f
 * 5. promise接收一个函数作为参数
 * 6. 函数接收两个函数resolve、reject作为参数
 * 7. 每个函数都接受一个参数
 * 8. success接收resolve的参数作为参数
 * 9. fail接收reject的的参数作为参数
 * 
 */

class Promise{
  constructor(executor){
      
     const resolve = (data)=>{
          
     }    
     executor(resolve,reject)
  }

  then(){
      
  }

}

new Promise(A).then(success,fail)

const A = (resolve,reject)=>{
    resolve()
}