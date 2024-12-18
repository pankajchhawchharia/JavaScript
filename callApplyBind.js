// call , apply and bind method in js
let name = {
    firstName: "abc",
    lastName: "xyz"
}
let printFullName = function(homeTown,state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + "," + state);
}
printFullName.call(name,"Blr","Krt");
printFullName.apply(name,["jpg","wb"]);
let printMyName = printFullName.bind(name,"kol","wb");
printMyName();
