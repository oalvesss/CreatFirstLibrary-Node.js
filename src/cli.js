import fs from 'fs';
import tratarErro from './error/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaida } from './helpers.js';
import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { error } from 'console';
import { text } from 'stream/consumers';

const program = new Command();
program
.version('0.0.1')
.option('-t, --texto <string>', 'caminho do texto a ser processado')
.option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo dos resultados')
.action((options) => {
    const { texto, destino } = options;

    if(!texto || !destino){
        console.error(chalk.red('Erro: Favor inserir caminho de origem e destino!'))
        program.help();
        return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try{
        processaArquivo(caminhoTexto, caminhoDestino);
        console.log(chalk.green('Texto processado com sucesso!'));
        
    } catch{
        console.log('Ocorreu um erro', erro);
        
    }
})

program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try{
            if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
    
        } catch (erro) {
            tratarErro(erro);
        }
    });
}


async function criaESalvaArquivo (listaPalavras, endereco){ 
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaida(listaPalavras) // coverte para json
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado!');
        
    } catch(erro){
        throw erro;
    }
}

// function criaESalvaArquivo (listaPalavras, endereco){ 
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras); // coverte para json
        
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//         .then(() => {
//             console.log("Arquivo criado!");
//         }).catch((erro) => {
//             throw erro;
//         }).finally(() => console.log("Operação finalizada"));
        
// }