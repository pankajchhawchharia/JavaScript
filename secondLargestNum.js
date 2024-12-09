// waf to find the second largest number in an array
function largestNumber(arr) {
    console.log("array:",arr);
    let largeNum = -Infinity;
    let secondLargeNum = -Infinity;
    for (let i = 0;i<arr.length;i++) {
        if(arr[i] > largeNum)  {
            secondLargeNum = largeNum;
            largeNum = arr[i];
        } else if(arr[i]>secondLargeNum && arr[i]<largeNum) {
            secondLargeNum = arr[i];
        }
    }
    return secondLargeNum === -Infinity ? null : secondLargeNum;
}
console.log("largest number in an array:",largestNumber([1,2,3,4,45,5,65,6,3]));
