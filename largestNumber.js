// waf to print the largest number from an array
function largestNum(arr) {
    console.log("array : ",arr);
  return Math.max(...arr);
}
console.log("largest number in an array : ",largestNum([32,33,43,445,32,2323,4,3,4]));
