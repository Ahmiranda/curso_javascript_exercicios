function trocaVogais (string) {
    vogais = ["a","e","i","o","u"];
    newstring = [];
    let j = 0;
    for ( let i = 0; i < string.length; i++) {
           if (string[i] === vogais[0] || string[i] === vogais[1] || string[i] === vogais[2] || string[i] === vogais[3] || string[i] === vogais[4]) {
               newstring += "1";
            }
           else {
               newstring += string[i];
           }
    }
    return newstring;
}
console.log(trocaVogais("ccccccccccccccccavvvvvvvvvvde"));