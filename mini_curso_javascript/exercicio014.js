function teste () {
    let alunos = [
        "Ana",
        "Bia",
        "Carlos"
    ];
    let concat_texto = "";
    for (let i = 0; i < alunos.length; i++) {
        concat_texto += alunos[i];
    }

    return concat_texto;
}

console.log(teste());