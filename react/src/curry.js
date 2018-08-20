/**
 * @name curry
 * @description 柯里化
 */

 const add = (a) => (b) => a + b
 
 const num = add(1)(2)

 console.log(num)