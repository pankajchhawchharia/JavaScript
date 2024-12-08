// waf to check whether 2 strings are anagram or not
function anagram(str1,str2) {
    console.log("strings 1 :",str1,", string 2:",str2);
    if(str1.length !== str2.length) {
        return false;
    }
    const normalize = (str) => str.toLowerCase()
    .replace(/[^a-z0-9]/g,'')
    .split('')
    .sort()
    .join('');
    return normalize(str1) === normalize(str2);
}
console.log("in anagram :",anagram("listen","silent"));
