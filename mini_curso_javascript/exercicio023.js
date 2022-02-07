function tiraNumeros(string) {
    let newstring = [];
    for ( let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            newstring +="";
        }
        else {
            newstring += string[i];
        }
    }
    return newstring;
}

console.log(tiraNumeros("e"));