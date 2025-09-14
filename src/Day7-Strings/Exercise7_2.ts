//Exercise 7.2: Write a function isPalindrome that checks if a string is a palindrome (reads the same forwards and backward).


function isPalindrome (str:string):boolean{

    const clrstr= str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const revstr = clrstr.split('').reverse().join('')

    return clrstr===revstr
}

console.log(isPalindrome("Rajat"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("123"))