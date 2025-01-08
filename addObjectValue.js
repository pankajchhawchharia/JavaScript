// add value of object
var obj = {
	a: 1,
	b: 2,
	c: 3,
	z: 26
};

function addObject (obj) {
  console.log("object:",obj);
let sum = 0;
for(let key in obj) {
sum = sum + obj[key];
}
return sum;
};
console.log("sum of object value :",addObject(obj));
