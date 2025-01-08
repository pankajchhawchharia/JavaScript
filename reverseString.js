// Reverse a string without using reverse keyword. and result should be in string.
function reverseString(str) {
    console.log("string : ",str);
    console.log(str.split('').reverse().join(''));
    let reverseStr = '';
    for (let i = str.length-1; i>=0; i--) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}
console.log("reverse string is : ",reverseString("pankaj"));
