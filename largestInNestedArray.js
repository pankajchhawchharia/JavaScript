// largest number in nested array with recursion
findLargestInNestedArray = (arr) => {
    console.log("array:",arr);
    let max = -Infinity;
    for(const element of arr) {
        if(Array.isArray(element)) {
            max = Math.max(max,findLargestInNestedArray(element));
        } else {
            max = Math.max(max,element);
        }
     }
    return max;
}
const nestedArray = [[3,4,59],[94,45,5,32,[3,3,555,3]],[22,31,111]];
console.log(findLargestInNestedArray(nestedArray));
