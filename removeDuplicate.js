// waf to remove duplicates elements from an array
function removeDuplicate(arr) {
    console.log("array:",arr);
    let uniqueElements = [];
    for(let i=0;i<arr.length;i++) {
        if(uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}
console.log("unique element inside array: ",removeDuplicate([1,1,1,13,2,3,3,4,4,5,5,6]));
// ------------------------or
// function removeDuplicate(arr) {
//     console.log("array:",arr);
//     return [...new Set(arr)];
// }
