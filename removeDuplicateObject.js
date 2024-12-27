// remove duplicate object from an array
getUniqueObjects = (arr) => {
    console.log("array : ",arr);
    let uniqueMap = new Map();
    for(let obj of arr) {
        if(!uniqueMap.has(obj.name)) {
            uniqueMap.set(obj.name,obj);
        }
    }
    return Array.from(uniqueMap.values());
}
console.log("get unique object:",getUniqueObjects([
    {name: 'sai'},{name: 'pankaj'},{name: 'sai'},{name: 'pankaj'}
]));
