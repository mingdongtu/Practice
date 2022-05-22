// function* idMaker(){
//   let index = 0;
//   while(true)
//       yield index++;
// }

// let gen = idMaker(); // "Generator { }"

// console.log(gen.next().value);
// // 0
// console.log(gen.next().value);
// // 1
// console.log(gen.next().value);
// 2
// ...


function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 1000);