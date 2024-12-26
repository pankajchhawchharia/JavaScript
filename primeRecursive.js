// prime number using recursive method
isPrimeRecursive = (num,divisor = 2) => {
    console.log("number:",num);
    if(num <= 1) {
        return false;
    }
    if(divisor > Math.sqrt(num)) {
        return true;
    }
    if(num % divisor === 0) {
        return false;
    }
    return isPrimeRecursive(num,divisor + 1);
}
console.log("is prime number:",isPrimeRecursive(17));
