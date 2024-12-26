// filter even number from an array
filterEvenNumber = (arr) => {
    console.log("array:",arr);
    let evenNumber = [];
    for (i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 0) {
            evenNumber.push(arr[i]);
        }
    }
    return evenNumber;
}
console.log("filter even number :",filterEvenNumber([23,323,44,21,34,44,9]));

filterEvenNumberArray = (arr) => {
    console.log("array is:",arr);
    return arr.filter(num => num % 2 === 0);
}

console.log("filter even number in an array:",filterEvenNumberArray([43,34,323,12,45,12]));
