// waf to calculate the LCM least common multiple of two numbers
function findLcm(a,b) {
    console.log("the 2 numbers:",a,b);
    if(a===0 || b=== 0) {
        return 0;
    }
    const hcf = findGcd(a,b);
    return Math.abs((a*b)/hcf);
    function findGcd(a,b) {
        while (b!==0) {
             let remainder = a%b;
        a=b;
        b=remainder;
        }
        console.log("hcf or gcd of 2 numbers: ",a);
        return Math.abs(a);
    }
}
console.log("lcm of 2 numbers:",findLcm(12,15));
