




const A = ()=>{
     return new Promise((resolve,reject)=>{
      resolve('a')
})
}

const B = (arg)=>{
  
 return  new Promise((resolve,reject)=>{
  
    resolve(arg)
  })
}

const C = (arg)=>{
  return new Promise((resolve,reject)=>{
    resolve(arg)
  })
}

const D = (arg)=>{
//  return new Promise((resolve,reject)=>{
//     console.log(arg)
//   })
console.log(arg)
}

const A1 = ()=>{
  console.log(1)
}
const A2 = ()=>{
  console.log(2)
}
A().then(A1()).then(A2())

A().then(B).then(C).then(D)

const F1 = ()=>{
     return new Promise((resolve,reject)=>{
          resolve(11111) 
     })
}
const F2 = (arg)=>{
     console.log(arg)
}
F1().then(F2)  // 11111 ： 要具备还原思维


var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload  = resolve;
    img.onerror = reject;
    img.src = path;
  });
};

preloadImage().then((res)=>{
      console.log(res)
})


