// flatten nested array

flattenArrayRec = (arr) => {
    console.log("arrays :",arr);
    let arrResult = [];
    for (let element of arr) {
        if(Array.isArray(element)) {
            arrResult = arrResult.concat(flattenArrayRec(element));
        } else {
            arrResult.push(element);
        }
    }
    return arrResult;
}

console.log("flatten array:",flattenArrayRec([1,2,[3,4,4],5,6,[7,8,8,9]]));
