let arr = [
  { name: "abc",
  age: 24
  },
  { name: "xyz",
  age: 30
  },
  { 
    name: "abc",
  age: 24
  },
  {
    name: "dbf",
    age: 73
  }];
function removeDup(arr) {
  const unique = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const str = JSON.stringify(arr[i]);
    if (!seen.has(str)) {
      seen.add(str);
      unique.push(arr[i]);
    }
  }

  return unique;
}
 console.log(removeDup(arr));
