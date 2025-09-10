//Exercise 3.1: Write a function add that takes two numbers as parameters and returns their sum. Call the function with two numbers and log the result.

function add(num1:any,num2:any):number{

    if(typeof num1!=="number" || typeof num2!=="number"){
        
        throw new Error("Enter the number only")
    }

    return num1+num2

}

console.log(add(2,5))
console.log(add(8,9))
console.log(add("8",9))
