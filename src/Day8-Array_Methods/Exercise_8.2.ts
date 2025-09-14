//Exercise 8.2: Use filter to get only the even numbers from an array.

function evenNumber(num:number[]):number[]{

    return num.filter(num=>num%2===0)

}

console.log(evenNumber([2,3,4,5,6,7]))

console.log(evenNumber([25,63,64,765,676,744]))