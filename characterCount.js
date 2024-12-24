// character count in a string
characterCount = (str) => {
    console.log("string :",str);
    charCount = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(charCount[char]) {
            charCount[char] ++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log("charecter count in string:",characterCount("JaiShreeShyam"));
