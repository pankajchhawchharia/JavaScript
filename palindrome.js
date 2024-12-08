// given string is palindrome or not
function palindrome(str) {
    console.log("string:",str);
    const cleanedStr = str.toLowerCase()
        .replace(/[^a-z0-9]/g,'');
    const reversedString = str.split('')
        .reverse()
        .join('');
    return reversedString === cleanedStr;
}
console.log("string is palindrome: ",palindrome("radar"));
