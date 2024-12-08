// the longest word in a sentence
function longestWord(sentence) {
    console.log("the sentence:",sentence);
    let words = sentence.split(' ');
    let longestWordPresent = '';
    for (let word of words) {
         if(word.length>longestWordPresent.length) {
             longestWordPresent = word;
         }       
    }
    return longestWordPresent;
}
console.log("in a sentence the longest word is : ",longestWord("i am the best"));
