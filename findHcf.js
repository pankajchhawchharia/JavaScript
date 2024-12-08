// highest common factor or greatest common divisor
function findHcf(a,b) {
    console.log("numbers are :",`${a} , ${b}`);
    while (b!==0) {
        let remainder = a%b;
        a=b;
        b=remainder;
    }
    return Math.abs(a);
}
console.log("HCF is : ",findHcf(56,98));
