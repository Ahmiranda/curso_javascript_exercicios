function decidirCompra (preco, parcelas) {
    if ( preco > 1000 && parcelas > 10)
        return "Vou comprar";
    else if (preco > 500 && parcelas > 5)
        return  "Vou comprar";
    else if ( 500 >= preco)
        return "Vou comprar"
    else
        return "Não vou comprar";
}