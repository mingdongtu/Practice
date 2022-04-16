// $('textarea').on('keydown', debounce(ajaxAction, 2500))

function debounce(fn, delay) {
  var timer = null // 声明计时器
  const a = 1001
  return function () {
    var context = this
    var args = arguments
    console.log(arguments)
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply()
    }, delay)
  }
}
const ajaxAction = function(){
     console.log(100)
}
debounce(ajaxAction, 2500)()