function factorial(num) {
    console.log("number is :",num);
    let factorial = 1;
    if(num === 0) {
        return 1;
    }
    for (let i = 1;i<=num;i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("factorial of a number:",factorial(5));
