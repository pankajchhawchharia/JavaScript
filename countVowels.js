// waf that return the number of vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = ["a","e","i","o","u"];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count;
}
console.log("number of vowels in a string:",countVowels("pankaj"));
