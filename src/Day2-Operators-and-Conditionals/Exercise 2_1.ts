//Exercise 2.1: Write a program that takes a number and checks if it's positive, negative, or zero. Log the result.


function numberChecks(num:number){

   if(typeof num !== 'number' || isNaN(num)){
        console.log("Input is not a valid number.");
    }
    else if(num>0){
        console.log("Number is positive")

    }
    else if(num ===0 ){

        console.log("Number is zero")
    }
    else{
        console.log("Number is negative")

    }


}

numberChecks(5)
numberChecks(-5)
numberChecks(0)