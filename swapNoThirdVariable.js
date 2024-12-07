// waf to swap 2 numbers without using 3rd variable
function swap(a,b) {
    console.log("numbers before swap:",`${a} ${b}`);
    a=a+b;
    b=a-b;
    a=a-b;
    return `${a} ${b}`;
}
console.log("after swaping numbers:",swap(4,5));
