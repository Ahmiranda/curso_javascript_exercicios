function proximosMultiplosDe5 (valorInicial, quantidade) {
    multiplos = 0;
    vetor = [];
    operador = Math.floor(valorInicial/5);
    for (let i = 0; i< quantidade; i++) {
        vetor[i] = 5*(operador+1+i);
    }
    return vetor;
}

console.log(proximosMultiplosDe5(16, 3));
