// volta no video 6 de operadores lógicos
// não esquecer os comandos de cmd
// node nome_do_arquivo.js

function aprov(n1, n2, n3, faltas){
    let media = (n1+n2+n3)/3;
    let teste_media = (media>=7);
    let presen = (faltas <=10);

    if ( teste_media && presen){
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
console.log(aprov(10,6,5,9));