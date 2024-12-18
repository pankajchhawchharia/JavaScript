function removeWhiteSpaces(str) {
    console.log("input string:",str);
    const result = str.replace(/\s/g,'');
    return result;
}
console.log("remove white spaces from a string:", removeWhiteSpaces(" h  e  l l o "));
