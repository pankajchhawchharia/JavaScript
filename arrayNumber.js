//waf to print an array after removing smallest numbers from an array with the number of input
// [1,2,3,49,55,6,66,4],3 ===> [49,55,6,66,4]
function recursiveFunc(arr) {
  var smallestNumber = arr[0];
  for(let j = 0;j<arr.length; j++) {
    for(let k = j;k<arr.length;k++){
      if(arr[k] < smallestNumber) {
        smallestNumber = arr[k];
        index = k;
      }
    }
  }
arr.splice(index,1); // modify original array
console.log("array from recursive function  :",arr);
  return arr;
}
  function arrayNumber(arrayInput,i) {
    console.log("array and numbers :",arrayInput,i);
     let newRemovedArray = [];
    for (let p = 0;p<i;p++) {
    newRemovedArray = recursiveFunc(arrayInput,i);
  }
  return newRemovedArray;
  }

  console.log("array after removed smallest numbers :",arrayNumber([10,4,5,2,1,6,7],3));  // [10,5,6,7]
