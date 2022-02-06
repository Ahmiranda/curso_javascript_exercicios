function precodesconto (preco, temdesconto) {
    let teste_preco = (preco > 100);
    let teste_desconto = (temdesconto == "não");

    if ( teste_preco && teste_desconto) {
        return "Quero pechinchar";
    }
    else if (teste_preco || teste_desconto) {
        return "Quero pechinchar";
    }
    else {
        return "Negócio fechado";
    }
}
console.log(precodesconto(50,"não"));