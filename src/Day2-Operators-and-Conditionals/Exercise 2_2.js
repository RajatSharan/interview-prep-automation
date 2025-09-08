//Exercise 2.2: Write a function that takes a number representing a day of the week (1-7) and returns the corresponding day name (e.g., 1 -> "Monday"). Use a switch statement.

function dayOfWeek(dayNumber){

if(typeof dayNumber!== 'number' || isNaN(dayNumber) || dayNumber>0 || dayNumber<7){
       return "Invalid day number. Please enter a number between 1 and 7.";
    }

    let dayName
    switch(dayNumber){

        case 1: 
        dayName = "Monday";
        break
        case 2:
        dayName = "Tuesday";
        break
        case 3:
        dayName = "Wendesday"
        break
        case 4:
        dayName ="Thrusday"
        break
        case 5:
        dayName ="Friday"
        break
        case 6:
        dayName ="Satruday"
        break
         case 7:
        dayName ="Sunday"
        break

        default:
            dayName = "Invalid day number.";


    }

    return dayName

}

console.log(dayOfWeek("#@#@#"))
console.log(dayOfWeek("5"))
console.log(dayOfWeek(3))