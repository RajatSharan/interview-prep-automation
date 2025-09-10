//Exercise 3.1: Write a function add that takes two numbers as parameters and returns their sum. Call the function with two numbers and log the result.

function add(num1,num2){

    if(typeof num1!== 'number' || typeof num2!=='number')
    {
         throw new Error("Enter the number only")
    }

    return num1+num2

}

console.log(add(5,5))
console.log(add(4,9))
console.log(add(-3, 7))
