// merge and sort two array using spread operator
const arr1 = [0,3,4,31];
const arr2 = [4,6,30,21];
// const mergeArr = [...arr1,...arr2].sort((a,b) => a-b);
// console.log(mergeArr);

// merge and sort two array without using spread operator
mergeSortArrays = (arr1,arr2) => {
    const mergeArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
        mergeArr.push(arr1[i]);
        i++;
    } else {
        mergeArr.push(arr2[j]);
        j++;
    }
    }
return mergeArr.concat(arr1.slice(i).concat(arr2.slice(j)));
}
console.log(mergeSortArrays(arr1,arr2));
