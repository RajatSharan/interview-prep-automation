function findLongestWord(str:string) {

    const cleanedStr:string = str.toLowerCase().replace(/[^a-z\s]/g,'')
    const words = cleanedStr.split(' ');
     let longestWord = '';

     for (const word of words){

        if(word.length >longestWord.length){
            longestWord = word;
        }
     }

     return longestWord;


}


const str = "The quick brown fox jumped overed the lazy dog!";
const longest = findLongestWord(str);
console.log(longest);


//

function findLongestMultipleWord(str:string):string[] {

    const cleanedStr:string = str.toLowerCase().replace(/[^a-z\s]/g,'')
    const words:string[] = cleanedStr.split(' ');
     let longestWords:string[] = [];
     let maxLength:number=0

     for (const word of words){

        if(word.length >maxLength){
            maxLength = word.length;
            longestWords=[word]
        }
        else if(word.length === maxLength){
                longestWords.push(word);
        }
     }

     return longestWords;
}


const sentence = "I have an apple and an amazing banana.";
const allLongest = findLongestMultipleWord(sentence);
console.log(allLongest); 

const sentence2: string = "A quick brown fox.";
const allLongest2: string[] = findLongestMultipleWord(sentence2);
console.log(allLongest2);