const arr = ['a','b','c'];
console.log('array: ',arr);

let obj = arr.reduce(
    (arr,it) => ({...arr,[it]:it}),{}
)

let objectIndex = arr.reduce(
    (arr,it,i) => ({...arr,[i] : it}),{}
)

console.log("object with value as index",obj);
console.log('object with index as 0 1 2',objectIndex);
