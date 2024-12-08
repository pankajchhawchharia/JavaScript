// to check number is prime or not
function prime(n) {
    console.log("number :",n);
    if(n<=1) {
        return false;
    }
    for (let i=2;i<=Math.sqrt(n);i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}
console.log("number is prime :",prime(5));
