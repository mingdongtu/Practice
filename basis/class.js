class A {
      //  constructor(){
      //       return {a:1} //下面getA将不执行，也不会绑定到A类上
      //  }
      static getA(){
            console.log(this.a)
            console.log(100)
       }
}
A.getA()
// const B = new A();
// B.getA()


