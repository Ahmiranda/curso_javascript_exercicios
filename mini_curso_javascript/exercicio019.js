function avancarDias (dia, quantidade) {
    semana = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"];

let k;
let x;
    for (let j = 0; j < 7; j++) {
        if (semana[j] == dia) {
            k = j;
        }
    }
    x = k + quantidade;
    k = x % 7;
    return semana[k];
}
console.log(avancarDias("Sábado",57));


