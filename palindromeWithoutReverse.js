// given string is palindrome or not without using reverse
function palindrome(str) {
    console.log("string:",str);
    const cleanedStr = str.toLowerCase()
        .replace(/[^a-z0-9]/g,'');
    let reversedString = "";
for (i=str.length-1;i>=0;i--) {
    reversedString += str[i];
}
    if(reversedString === str) {
        return true;
    } else {
        return false;
    }
}
console.log("string is palindrome: ",palindrome("radar"));
