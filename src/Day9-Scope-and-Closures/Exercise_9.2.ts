//Exercise 9.2: Create a counter function using a closure that increments a variable each time it's called.

function counter(){

    let num:number =0

  return function innercounter(){

          num ++
          console.log(num)
    }

}

let fo = counter()

fo()
fo()