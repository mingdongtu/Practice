const a = [100,99,88]
console.log(Array.isArray(a))

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"

const b = [1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a - b;
})
console.log(b)

const c = [1, 2, 3, 4, 5].reduceRight(function (a, b) {
  console.log(a, b);
  return a - b;
})
console.log(c)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(typeof citrus,citrus)