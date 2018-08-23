/**
 * @name curry
 * @description 柯里化
 */

 const add = (a) => (b) => a + b
 
 const num = add(1)(2)
 const num2 = add(add(1)(2))(2)

 console.log(num)
 console.log(num2);