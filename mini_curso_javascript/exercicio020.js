function intervaloPares(inicio, fim, quantidade) {
    if (inicio > fim) {
        return "Operação não possível, por favor, retorne um valor final maior que o inicial";
    }
    let teste = ( (inicio % 2) === 0 );
    let numeros = [];
    let i = 0;
    if (teste) {
       while (i < quantidade) {
            numeros[i]= inicio + i * 2;
            i++;
       }
    }
    else {
        while (i <quantidade){
            numeros[i] = inicio + i * 2 + 1;
            i++;
        }
    }
    return numeros;

}
console.log(intervaloPares(2,10, 3));