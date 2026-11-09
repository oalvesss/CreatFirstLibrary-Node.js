const fs = require('fs'); // biblioteca com file system 
const { connected } = require('process');

const caminhoArquivo = process.argv; 
const link = caminhoArquivo[2];


fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto)
    // verificaPalavrasDuplicadas(texto)
});

function contaPalavras(texto){
    
}

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//   "web": 5,
//   "computador": 4
// }

function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n'); // caracter de escape, quebrada de linha
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    });

    console.log(contagem);
    
}

function limpaPalavra(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); // serve como separador de palavras 
    const resultado = {};
    // Objeto[propriedade] = valor;

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {

        const palavraLimpa = limpaPalavra(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;

        }
    });

    return resultado;
    
}


