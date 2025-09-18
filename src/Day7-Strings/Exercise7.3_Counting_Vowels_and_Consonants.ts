//Exercise: Write a function called countVowelsAndConsonants that takes one argument, a string, and returns an object with two properties: vowels and consonants.

function countVowelsAndConsonants(str:string):{vowels:number,consonants:number}{

// A Set is more efficient for checking if an item exists than an array.
    let vowels = new Set(['a','e','i','o','u'])
    let vowelCount = 0
    let consonantCount=0

// Loop through each character of the string
    for (const char of str.toLowerCase()){
// Check if the character is an English alphabet letter
    if(char>='a'  && char<='z'){
         // Check if the letter is a vowel
        if(vowels.has(char)){

            vowelCount++
        }
        else{
            consonantCount++
        }
    }
}

    return{vowels :vowelCount,consonants:consonantCount}
  
}

const testString: string = "Hello World! This is a test.";
const result = countVowelsAndConsonants(testString);
console.log(result)