function aprov (n1, n2, n3, faltas) {
    let teste_media = ((n1 + n2 + n3)/3 >= 7);
    let teste_faltas = (faltas < 10);

    if ( teste_faltas && teste_media) {
        return "Aprovado";
    }
    else {
        return "Reprovado"
    }
}
console.log(aprov(7,3,1,0));