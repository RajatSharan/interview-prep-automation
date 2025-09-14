//Exercise 8.1: Use map to double every number in an array.

 function double(arr:number[]):number[]{

      return  arr.map(ev=>ev*2)

    
 }

//Arrow function

const doubleArray= (arr:number[]):number[]=>arr.map(num=>num*2)


 console.log(double([2,3,4,5]))
 console.log(doubleArray([3,4,5,6]))