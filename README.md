# Criando Primeira Biblioteca - Node.js

Ferramenta de linha de comando (CLI) em Node.js que analisa arquivos de texto e identifica **palavras duplicadas em cada parágrafo**, salvando o resultado em um arquivo de saída.

## Sobre o projeto

O projeto foi criado como estudo para aprender a construir uma primeira biblioteca/CLI em Node.js, explorando:

- Criação de CLI com argumentos usando **Commander**
- Formatação de saída no terminal com cores usando **Chalk**
- Leitura e escrita de arquivos com o módulo **fs** (callbacks e `fs.promises`)
- Módulos ES (ESM) com `"type": "module"`
- Tratamento de erros customizado

## Como funciona

1. A CLI recebe o **caminho do arquivo de texto** de origem e o **caminho da pasta de destino**.
2. O texto é lido e dividido em parágrafos (por quebra de linha).
3. Em cada parágrafo, as palavras são limpas (remoção de pontuação), filtradas (apenas palavras com 3 ou mais caracteres) e contadas.
4. As palavras que aparecem **mais de uma vez** em cada parágrafo são listadas.
5. O resultado é salvo em `resultado.txt` dentro da pasta de destino.

Exemplo de saída:

```
Palavras duplicadas no parágrafo 1 : node, javascript
Palavras duplicadas no parágrafo 2 : arquivo, texto
```

## Estrutura do projeto

```
├── arquivos/               # Textos de exemplo para processar
├── resultados/             # Pasta de saída padrão dos resultados
├── src/
│   ├── cli.js              # CLI com Commander: recebe argumentos e orquestra o fluxo
│   ├── index.js            # Lógica principal: contagem de palavras duplicadas por parágrafo
│   ├── helpers.js          # Helpers: filtro de ocorrências e montagem do texto de saída
│   └── error/
│       └── funcoesErro.js  # Tratamento de erros (ex.: arquivo não encontrado - ENOENT)
├── package.json
└── README.md
```

## Pré-requisitos

- Node.js instalado (versão 18 ou superior recomendada)

## Instalação

```bash
npm install
```

## Uso

```bash
node src/cli.js --texto <caminho-do-arquivo> --destino <pasta-de-destino>
```

As opções também funcionam na forma abreviada `-t` e `-d`:

```bash
node src/cli.js -t arquivos/texto-web.txt -d resultados
```

Opções disponíveis:

| Opção | Atalho | Descrição |
|---|---|---|
| `--texto` | `-t` | Caminho do arquivo de texto a ser processado |
| `--destino` | `-d` | Caminho da pasta onde o `resultado.txt` será salvo |

Se algum dos dois caminhos não for informado, a CLI exibe uma mensagem de erro em vermelho e o texto de ajuda (`--help`).

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) — runtime JavaScript
- [Commander](https://www.npmjs.com/package/commander) — criação da CLI
- [Chalk](https://www.npmjs.com/package/chalk) — cores no terminal

## Próximos passos possíveis

- Adicionar testes automatizados (`npm test`)
- Publicar a biblioteca no npm
- Aceitar outros formatos de saída (JSON, CSV)
- Suportar múltiplos arquivos de uma vez
