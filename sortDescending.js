// sort array in desending order
sortArrayDesc = (arr) => {
    console.log("array:",arr);
    return arr.sort((a,b) => b-a);
}
console.log("array after sorting in descending order: ", sortArrayDesc([3,45,66,2,35,4,6,7,77,8667]));
