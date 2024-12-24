// reverse word in sentence without using reverse method
reverseWordSentence = (sentence) => {
    console.log("the sentence: ",sentence);
    let words = sentence.split(' ');
    let reverseWords = [];
    for (let i = words.length - 1;i>=0;i--) {
        reverseWords.push(words[i]);
    }
    return reverseWords.join(" ");
}

console.log("reverse word of a sentence : ",reverseWordSentence("i am the best i can deliver"));
