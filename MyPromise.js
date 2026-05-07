var MyPromise = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve("i promise to return this after 1 second");
    },1000);
});
MyPromise.then(function(value) {
    console.log(value);
});
