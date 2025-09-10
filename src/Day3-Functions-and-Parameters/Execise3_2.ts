//Exercise 3.2 (TypeScript): Create a function isEven that takes a number as a parameter and returns a boolean indicating if it's even. Add type annotations for the parameter and return value.

function isEven(num:number):boolean{

   return num % 2 === 0;
}

console.log(isEven(19))
console.log(isEven(28))
