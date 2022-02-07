function somaAteMeta(inicio, meta) {
    let soma = inicio;
    let intera = [];
    let i = 0;
    total = 0;
    while (total < meta) {
        soma++;
        intera[i]=soma;
        total += intera[i];
        i++;
    }
    return intera;
}
console.log(somaAteMeta(12,45));
