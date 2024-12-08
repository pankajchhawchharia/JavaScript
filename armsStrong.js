// to check number is arms strong or not
function armsStrong(n) {
    console.log("number:",n);
    if(n<=0) {
        console.log("give positive input ");
    }
    let numToString = n.toString();
    let numDigits = numToString.length;
    let sum = 0;
    for(const digit of numToString) {
        sum += Math.pow(parseInt(digit),numDigits);
    }
    if(sum === n)
    return true;
}
console.log("number is arms strong : ",armsStrong(153));
