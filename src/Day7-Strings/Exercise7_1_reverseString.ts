//Exercise 7.1: Write a function reverseString that takes a string and returns it in reverse.

function reverseString(str:string):string{

    return str.split("").reverse().join("")


}

//Exercise 7.1: Write a function reverseString that takes a string and returns it in reverse  without using reverse.

function reverseStringwithoutDefault(str1:string):string{

    const char = Array.from(str1)

    let reverse =""
    
for(let i=char.length-1;i>=0;i--){

    reverse+=char[i]
}

return reverse

}


console.log(reverseString("Rajat"))
console.log(reverseStringwithoutDefault("MY NAME IS RAJAT"))

