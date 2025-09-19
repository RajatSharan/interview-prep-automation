//Exercise 13.1: Write a recursive function to calculate the factorial of a number.

function factorial(num:number):number{

    if(num<=1){
        return 1
    }

    return num*factorial(num-1)

}

console.log(factorial(3))