//防抖： 事件会在触发后一段时间再执行，如果一段时间内重新触发了，那么就会重新开始延时
//典型的例子是：输入框输入后，用户停顿一段时间后触发搜索，当用户一段时间内又输入，那么就重新延后搜索

function debounce(fn,time){
      // let preTime = new Date()
      let timer = null;
      return ()=>{
        //如果timer存在，那么就需要删掉计时，重新赋予计时
        if(timer!==null){
            clearTimeout(timer)
        }
        timer = setTimeout(fn,time)
         
      }
}

function fn(){
     console.log('执行')
}

window.addEventListener('scroll',debounce(fn,3000))