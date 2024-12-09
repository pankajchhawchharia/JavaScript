// waf to print the largest number from an array
function largestNum(arr) {
    console.log("array : ",arr);
  return Math.max(...arr);
}
console.log("largest number in an array : ",largestNum([32,33,43,445,32,2323,4,3,4]));
// -----------------or


// waf to find the largest number in an array
function largestNumber(arr) {
    console.log("array:",arr);
    let largeNum = arr[0];
    for (let i = 0;i<arr.length;i++) {
        if(arr[i] > largeNum)  {
            largeNum = arr[i];
        }
    }
    return largeNum;
}
console.log("largest number in an array:",largestNumber([1,2,3,4,45,5,65,6,3]));
