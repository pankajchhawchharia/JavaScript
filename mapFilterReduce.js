let arr = [1,2,3,4,5];
function doubleArr(arr) {
    let doubleArrayValue = arr.map((ar) => ar*2);
    console.log("doubleArrayValue:",doubleArrayValue);
    let arrayLess7 = doubleArrayValue.filter((double) => double<7);
    console.log("array with Less then 7",arrayLess7);
    let sumArrayLess7 = 
        arrayLess7.reduce((accumulator,currentValue) => accumulator + currentValue,0);
    console.log("sum of Array with Less then 7",sumArrayLess7);
    return arr;
}
console.log("array : ",doubleArr(arr));
