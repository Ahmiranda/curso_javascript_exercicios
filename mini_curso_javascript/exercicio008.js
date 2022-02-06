function classific (nota_vestiba, nota_enem) {
    let aprov_vestiba = (nota_vestiba > 8);
    let aprov_enem = (nota_enem > 750);
    if (!aprov_vestiba){
        let texto = "você não foi aprovado, mas ainda tem chanes de ser aprovado através do ENEM.";
        console.log("Obrigado por prestar o vestibular para a nossa instituição. \n" + texto);

    }
    if (aprov_enem || aprov_vestiba){
        // as duas barras verticais é o "ou" lógico "||"
        return "Classificado nos vestibulares.";
    }
    else {
        return "Não classificado nos exames.";
    }
}
console.log(classific(4,800));