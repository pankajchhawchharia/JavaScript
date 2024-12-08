// reverse digit of a number
function reverseDigit(n) {
    console.log("number to reverse is:",n);
    const isNegative = n<0;
    const reversedString = Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('');
    const reversedNumber = parseInt(reversedString,10);
    return isNegative? -reversedNumber : reversedNumber;
}
console.log("reversed number is:",reverseDigit(-1245));
