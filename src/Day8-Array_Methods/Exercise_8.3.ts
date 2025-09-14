//Exercise 8.3: Use reduce to sum all the numbers in an array.

function add(nums:number[]):number{

    return nums.reduce((acc,cur)=>acc+cur,0)


}

console.log(add([2,3,4,5,6,7]))