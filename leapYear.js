// given year is leap year or not
function leapYear(year) {
    console.log("year :",year);
    if(year%4===0) {
        if(year%100 !== 0){
            return true;
        } else if(year%400 === 0){
        return true;
    } else {
            return false;
    }
    } else {
        return false;
    }
}
console.log("year is leap year :",leapYear(1900));
