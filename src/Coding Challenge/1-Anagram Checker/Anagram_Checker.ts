//Write a TypeScript function, areAnagrams(str1: string, str2: string): boolean, that determines whether two input strings are anagrams of each other.

function areAnagrams(str1: string,str2:string):boolean{

    let str11= str1.toLowerCase().replace("/[\W_]/g",'')
    let sortedStr1 = str11.split('').sort().join('')
    let str12 =str2.toLowerCase().replace("/[\W_]/g",'')
     let sortedStr2 = str12.split('').sort().join('')

    return sortedStr1 === sortedStr2 

}

console.log(`"Debit Card" and "Bad Credit": ${areAnagrams("Debit Card", "Bad Credit")}`); // true
console.log(`"listen" and "silent": ${areAnagrams("listen", "silent")}`); // true
console.log(`"A gentleman" and "Elegant man": ${areAnagrams("A gentleman", "Elegant man")}`); // true
console.log(`"automation" and "testing": ${areAnagrams("automation", "testing")}`); // false
console.log(`"Hello" and "world": ${areAnagrams("Hello", "world")}`); // false
