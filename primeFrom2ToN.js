// print all prime numbers from 2 to given number
function primeNumber(n){
    console.log("input :",n);
    if(n<2){
        return "not a prime numbers";
    }
    let primes = [];
    for(let i=2;i<=n;i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
    function isPrime(num) {
        for(let i=2;i<=Math.sqrt(num);i++) {
            if(num%i ===0) {
                return false;
            }
        }
        return true;
    }
}
console.log("prime number :",primeNumber(50));
