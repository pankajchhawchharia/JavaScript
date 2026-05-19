let obj = {
    city: {
        value: 'Bangalore',
        details: {
            pincode: 123456,
            location: {
                xpath: 20,
                ypath: 30
            }
        }
    }
}
function flat(obj,prefix='',result={}) {
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flat(obj[key],prefix +key.charAt(0).toUpperCase() + key.slice(1),result);
            
        }else {
            result[prefix + key.charAt(0).toUpperCase() + key.slice(1)] = obj[key];
        }
    }
    return result;
}
console.log(flat(obj));
