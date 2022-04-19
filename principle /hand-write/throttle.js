//截流： 一般用于固定时间只执行一次，防止高频触发，拖拽、缩放场景
// function throttle(fn,time){
//      let preTime = new Date(); //给window对象绑定上scroll事件就已执行，且仅执行一次
//      return ()=>{ //每次出发scroll函数都会执行
//            const nowTime = new Date();
//            if(nowTime-preTime>=time){
//                  fn();
//                 //这一次的终点是下一次执行的起点，需要重新更新preTime
//                 preTime = new Date()
//            }
//      }
// }
// //滚动条触发
// function fn(){
//     console.log('执行')
// }
// window.addEventListener('scroll',throttle(fn,1000))



// 定时器的实现方式
function throttle(fn,time){
      let timer = null;
       return ()=>{
            //一段时间内只执行一次，也就是一段时间内只创建一次定时器
            const nowTime = new Date();
          if(!timer){
            timer = setTimeout(()=>{
              fn()
              // clearTimeout(timer)
              timer = null ;
            },time);
          }
          

       }
}
function fn(){
     console.log(new Date())
}

window.addEventListener('scroll',throttle(fn,1000))

