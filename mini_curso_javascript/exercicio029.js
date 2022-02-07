function ehNumeroDriven (numero) {
    // escreva seu código aqui :)
    let n = Math.floor(numero/10);
    let valor = Math.pow(numero,(n+1))-2;
    if (valor === numero)
        return "É desse tipo";
    else
        return "Não é desse tipo"

}
console.log(ehNumeroDriven(23));