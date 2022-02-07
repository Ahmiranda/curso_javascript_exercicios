function  contaLetras (string, letra) {
    let contador = 0;
    for ( let i = 0; i < string.length; i++ ) {
        if (string[i] === letra ) {
            contador++;
        }
    }
    return contador;
}

console.log(contaLetras("Característica","z"));