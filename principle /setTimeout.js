// var div = document.getElementsByTagName('div')[0];

// // 写法一
// for (var i = 0xA00000; i < 0xFFFFFF; i++) {
//   div.style.backgroundColor = '#' + i.toString(16);
// }

// // 写法二
// var timer;
// var i=0x100000;

// function func() {
//   timer = setTimeout(func, 0); //把循环放在微任务里，把DOM操作放在同步操作里，实现： DOM渲染后再执行循环，这样就会看到颜色在每一次循环都会变化
//   div.style.backgroundColor = '#' + i.toString(16);
//   if (i++ == 0xFFFFFF) clearTimeout(timer);
// }

// timer = setTimeout(func, 0);

// 上面代码有两种写法，都是改变一个网页元素的背景色。写法一会造成浏览器“堵塞”，因为 JavaScript 执行速度远高于 DOM，
// 会造成大量 DOM 操作“堆积”，而写法二就不会，这就是setTimeout(f, 0)的好处。

// 另一个使用这种技巧的例子是代码高亮的处理。如果代码块很大，一次性处理，可能会对性能造成很大的压力，
// 那么将其分成一个个小块，一次处理一块，比如写成setTimeout(highlightNext, 50)的样子，性能压力就会减轻。


// for(let i=0;i<10;i++){
//     console.log(10+i)
//     setTimeout(function(){
//        console.log(i)
//     },0)
// }

function print(n) {
  setTimeout(() => {
      console.log(n);
  },1, Math.floor(Math.random() * 1000));//第3个或后面的参数是附加参数，一旦定时器到期，它们会作为参数传递给function 
}
for (var i = 0; i < 100; i++) {
  print(i);
}

