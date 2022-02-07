function tudo_positivo (n1, n2, n3) {
    let teste1 = (n1 <0);
    let teste2 = (n2 <0);
    let teste3 = (n3 <0);

    if (teste1 || teste2 || teste3) {
        return "Tem negativo!";
    }
    else {
        return "Tudo positivo!";
    }
}
console.log(tudo_positivo(3,5,8));