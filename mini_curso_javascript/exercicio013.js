//loop com a instrução do for (const ; condicional ; incremento)

function loopwithfor () {
    let c = 0;
    let frase = " ";
    for ( c = 0; c < 100; c++ ){
        frase += "Não conte mentriras \n";
    }
    return frase;
}

console.log(loopwithfor());