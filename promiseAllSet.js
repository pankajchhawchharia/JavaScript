const promise1 = Promise.reject('Error promise 1 failed');
const promise2 = Promise.resolve('success promise 2 resolved');
const promise3 = Promise.reject('error promise 3 failed');

Promise.allSettled([promise1,promise2,promise3])
.then((results) => results.forEach((result,index) => {
    if(result.status === 'fulfilled') {
        console.log(`promise ${index + 1} fulfilled with : `,result.value);
    } else {
        console.log(`promise ${index + 1} rejected with :`, result.reason);
    }
}));
