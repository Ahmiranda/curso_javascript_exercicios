function ehPalindromo (string) {
    let texto = [];
    let tamanho = string.length;
    let valor = Math.floor(tamanho/2);
   for (let i = 0; i<valor; i++){
       if (string[i] !== string[valor -1-i]){
           return "não";
       }
       else
           return "sim";
   }

}
console.log(ehPalindromo("aaaaa"));