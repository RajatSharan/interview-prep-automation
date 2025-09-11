//Write a function calculateAverage that takes an array of numbers and returns their average. If the array is empty, it should return 0. This is a foundational skill for parsing and analyzing test data.
function calculateAverage (arr:number[]):number{


    if(!arr||arr.length ===0){
        return 0
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum/arr.length
}

console.log(calculateAverage([2,3,4,5,6]))