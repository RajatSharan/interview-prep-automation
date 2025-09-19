//Exercise 13.2: Write a recursive function to calculate the Nth number in the Fibonacci sequence.

function fibonacci(n:number):number{

    if(n<=1){

        return 1
    }

    return fibonacci(n-1) + fibonacci(n-2)

}

console.log(fibonacci(7))

