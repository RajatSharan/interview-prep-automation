//Create a function that returns another function. The inner function should access a variable from the outer function's scope.

function outer(){

    let age:number =20

   return function inner(){

    console.log(age)

    }


}

const fn = outer();
fn()