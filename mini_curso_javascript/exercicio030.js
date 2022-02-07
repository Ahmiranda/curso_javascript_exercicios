function encriptarPalavra(palavra,chave) {
        palavra = palavra.toLowerCase();
        var texto = [];
        var numeros = [];
        for (let i = 0; i < palavra.length; i++) {
            numeros[i] = palavra[i].charCodeAt(0) - 64 + chave;
        }
        for (let i = 0; i < palavra.length; i++) {
            texto[i] = string.fromCharCode((numeros[i]+64));
        }

    return texto;

    }

console.log(encriptarPalavra("dsfasd"));