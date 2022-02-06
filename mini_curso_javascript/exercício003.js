function calculadoramedia (n1, n2, n3, nome) {
    let media = (n1*3 + n2*3 + n3*4)/10;
    let texto = "A média do aluno " + nome + "  foi: " + media;
    return texto;
}

console.log( calculadoramedia(6,7, 8, "Alan"));

// manipulação de string no código