//Exercise 4.2: Use a while loop to find the first number greater than 100 that is divisible by 7.

function printNumbers():number{

    let num=101

    while(true){

        if(num%7==0){
           return num
        }
         num++
    }

   
}

console.log(printNumbers())
