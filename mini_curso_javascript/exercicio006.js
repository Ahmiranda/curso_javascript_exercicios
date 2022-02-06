function aprov (n1, n2, n3, nome) {
    let media = (n1*3 + n2+3 + n3*4)/10;
// alternativa let aprovacao = (media < 7); retorna valores booleanos para as funções e condicionais.
    if (media < 5) {
        return nome + " foi reprovado com média: " + media;
    }
    else  if ( media > 5 && media < 7 ){
        return  nome + " foi para a prova final com média: " + media;
    }
    else {
        return nome + " foi Aprovado com média: " + media;
    }

}
console.log(aprov(4.5,10,8.2, "Alan"));
// media > 7 "maior"
// media >= 7 "maior ou igual"
// media < 7 "menor"
// media <= 7 "menor ou igual"
// media == 7 "identicidade"
// media != 7 "diferenciabilidade"