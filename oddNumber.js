let arr = [1,2,3,4,5];

function remove(arr) {
    let oddArr = arr.slice(1);
    return oddArr.filter((ar) => ar%2 !== 0);
}
console.log(remove(arr));
