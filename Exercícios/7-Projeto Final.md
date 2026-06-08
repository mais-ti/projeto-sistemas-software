# Projeto Final: Sistema de Passagens Aéreas

Ao longo das últimas aulas, construímos juntos um sistema de passagens aéreas que evoluiu bastante: começou com objetos simples, passou a usar classes e ganhou persistência com arquivos JSON. Agora, vamos dar o passo final.

O projeto que vamos desenvolver é uma versão completa do sistema, dividida em dois módulos independentes que compartilham o mesmo banco de dados SQLite. Ou seja, o que a companhia cadastrar fica disponível imediatamente para o cliente.


## Estrutura do projeto

No VSCode, criem uma pasta chamada `sistema-passagens` e, dentro dela, os seguintes arquivos:

- `database.js`
- `companhia.js`
- `cliente.js`

Em seguida, abram o terminal e instalem as dependências:

```
npm install better-sqlite3 prompt-sync
```

## O banco de dados

O arquivo `database.js` é o ponto de partida. Ele cria a conexão com o banco `sistema_passagens.db` e garante que as três tabelas existam antes de qualquer coisa.

As tabelas são:

**Companhia**
| Campo | Tipo |
|---|---|
| id | INTEGER (PK, autoincremento) |
| nome | TEXT |
| anoFundacao | INTEGER |

**Trecho**
| Campo | Tipo |
|---|---|
| id | INTEGER (PK, autoincremento) |
| idCompanhia | INTEGER (FK → Companhia) |
| origem | TEXT |
| destino | TEXT |
| valor | REAL |
| numeroPassagens | INTEGER |

**Cupom**
| Campo | Tipo |
|---|---|
| id | INTEGER (PK, autoincremento) |
| idCompanhia | INTEGER (FK → Companhia) |
| codigo | TEXT |
| percentualDesconto | REAL |
| numeroCupons | INTEGER |

Ao final do `database.js`, exportem a conexão com `module.exports = db` para que os outros módulos possam usá-la.


## Modulo companhia.js

Este é o sistema que a companhia aérea usa para gerenciar seus trechos e cupons de desconto.

### Funcionalidades

**Trechos:**
- Cadastrar um novo trecho, informando a companhia responsável, origem, destino, valor e número de passagens disponíveis;
- Listar todos os trechos cadastrados, exibindo as informações da companhia vinculada;
- Editar um trecho existente;
- Excluir um trecho.

**Cupons:**
- Cadastrar um novo cupom, informando a companhia responsável, o código do cupom, o percentual de desconto e a quantidade de cupons disponíveis;
- Listar todos os cupons cadastrados;
- Editar um cupom existente pelo código;
- Excluir um cupom pelo código.

**Cadastro de companhia (implícito):**

Não há uma opção direta de cadastro de companhia no menu. O cadastro acontece de forma automática em dois momentos: ao cadastrar um trecho ou ao cadastrar um cupom. Nesses momentos, o sistema pede o ID da companhia. Se o ID não existir no banco, o sistema pergunta se o usuário deseja cadastrar uma nova companhia. Caso a resposta seja sim, ele pede o nome e o ano de fundação e cadastra na hora.

### Estrutura do código

```javascript
const prompt = require('prompt-sync')();
const db = require('./database');

// -------------------------------------------
// FUNÇÕES AUXILIARES
// -------------------------------------------

function pausar() {
    // pausa a execucao e limpa a tela
}

function listarCompanhias() {
    // busca todas as companhias no banco e exibe no terminal
    // retorna o array de companhias
}

function validarOuCadastrarCompanhia(idInformado) {
    // busca a companhia pelo id informado
    // se nao existir, pergunta se o usuario quer cadastrar uma nova
    // se sim, pede nome e ano de fundacao e insere no banco
    // retorna o id valido ou null se o usuario optar por nao cadastrar
}

// -------------------------------------------
// FUNÇÕES DE TRECHOS
// -------------------------------------------

function cadastrarTrecho() {
    // lista as companhias, pede o id da companhia
    // valida ou cadastra a companhia
    // pede origem, destino, valor e numero de passagens
    // insere o trecho no banco
}

function listarTrechos() {
    // busca todos os trechos com JOIN na tabela Companhia
    // exibe os dados de cada trecho no terminal
}

function editarTrecho() {
    // lista os trechos, pede o id do trecho a editar
    // verifica se o trecho existe
    // pede os novos dados e atualiza no banco
}

function excluirTrecho() {
    // lista os trechos, pede o id do trecho a excluir
    // verifica se o trecho existe
    // remove do banco
}

// -------------------------------------------
// FUNÇÕES DE CUPONS
// -------------------------------------------

function cadastrarCupom() {
    // lista as companhias, pede o id da companhia
    // valida ou cadastra a companhia
    // pede codigo, percentual de desconto e numero de cupons
    // insere o cupom no banco
}

function listarCupons() {
    // busca todos os cupons com JOIN na tabela Companhia
    // exibe os dados de cada cupom no terminal
}

function editarCupom() {
    // lista os cupons, pede o codigo do cupom a editar
    // verifica se o cupom existe
    // pede os novos dados e atualiza no banco
}

function excluirCupom() {
    // lista os cupons, pede o codigo do cupom a excluir
    // verifica se o cupom existe
    // remove do banco
}

// -------------------------------------------
// MENU PRINCIPAL
// -------------------------------------------

let opcao = -1;

console.clear();
console.log('\n===========================================');
console.log('   SISTEMA DE PASSAGENS - COMPANHIA        ');
console.log('===========================================');

while (opcao !== 0) {
    console.log('\n---- MENU ----');
    console.log('1 - Gerenciar Trechos');
    console.log('2 - Gerenciar Cupons');
    console.log('0 - Sair');
    console.log('-------------------------\n');

    opcao = parseInt(prompt('Escolha uma opcao: '));

    switch (opcao) {

        case 1:
            console.log('\n---- TRECHOS ----');
            console.log('1 - Cadastrar');
            console.log('2 - Listar');
            console.log('3 - Editar');
            console.log('4 - Excluir');
            const opcaoTrecho = parseInt(prompt('Escolha: '));

            switch (opcaoTrecho) {
                case 1: cadastrarTrecho(); break;
                case 2: listarTrechos(); break;
                case 3: editarTrecho(); break;
                case 4: excluirTrecho(); break;
                default: console.log('\nOpcao invalida.'); break;
            }
            pausar();
            break;

        case 2:
            console.log('\n---- CUPONS ----');
            console.log('1 - Cadastrar');
            console.log('2 - Listar');
            console.log('3 - Editar');
            console.log('4 - Excluir');
            const opcaoCupom = parseInt(prompt('Escolha: '));

            switch (opcaoCupom) {
                case 1: cadastrarCupom(); break;
                case 2: listarCupons(); break;
                case 3: editarCupom(); break;
                case 4: excluirCupom(); break;
                default: console.log('\nOpcao invalida.'); break;
            }
            pausar();
            break;

        case 0:
            console.log('\nFinalizando o sistema... Ate logo!\n');
            break;

        default:
            console.log('\nOpcao invalida! Tente novamente.');
            pausar();
            break;
    }
}
```


## Modulo cliente.js

Este é o sistema que o cliente usa para consultar trechos disponíveis, montar o carrinho e realizar a compra.

### Funcionalidades

- Visualizar todos os trechos disponíveis (com passagens ainda em estoque) ou filtrar por companhia;
- Adicionar um ou mais trechos ao carrinho;
- Remover um trecho do carrinho;
- Ver o carrinho atual;
- Finalizar a compra:
  - Aplicar um cupom de desconto (opcional);
  - Exibir o cupom fiscal com valor por trecho, subtotal, desconto e valor final;
  - Confirmar a compra digitando `comprar` no terminal;
  - Ao confirmar, subtrair uma passagem de cada trecho comprado no banco de dados.

**Avisos que o sistema deve exibir:**
- Quando o cupom inserido não existir: `"Cupom invalido."`;
- Quando o cupom estiver esgotado: `"Cupom esgotado."`;
- Quando um trecho não tiver passagens disponíveis: ele não deve aparecer na listagem.

### Estrutura do código

```javascript
const prompt = require('prompt-sync')();
const db = require('./database');

// -------------------------------------------
// FUNÇÕES AUXILIARES
// -------------------------------------------

function pausar() {
    // pausa a execucao e limpa a tela
}

// -------------------------------------------
// FUNÇÕES DE VISUALIZACAO
// -------------------------------------------

function listarTodosOsTrechos() {
    // busca os trechos com numeroPassagens > 0
    // faz JOIN com Companhia para exibir o nome
    // exibe no terminal
}

function listarTrechosPorCompanhia() {
    // lista as companhias, pede o id da companhia
    // busca os trechos daquela companhia com numeroPassagens > 0
    // exibe no terminal
}

// -------------------------------------------
// FUNÇÕES DE COMPRA
// -------------------------------------------

function exibirCarrinho(carrinho) {
    // percorre o array carrinho e exibe cada item com origem, destino e valor
}

function adicionarAoCarrinho(carrinho) {
    // chama listarTodosOsTrechos, pede o id do trecho
    // busca o trecho no banco e verifica se tem passagens disponiveis
    // adiciona o trecho ao array carrinho
}

function removerDoCarrinho(carrinho) {
    // exibe o carrinho, pede o numero do item a remover
    // remove do array usando splice
}

function aplicarCupom() {
    // pede o codigo do cupom
    // busca no banco, verifica se existe e se tem cupons disponiveis
    // exibe o aviso adequado e retorna o percentual de desconto (ou 0)
}

function finalizarCompra(carrinho) {
    // verifica se o carrinho nao esta vazio
    // chama aplicarCupom para obter o percentual de desconto
    // calcula subtotal, valor de desconto e valor final
    // exibe o cupom fiscal
    // pede confirmacao digitando "comprar"
    // se confirmado: subtrai uma passagem de cada trecho no banco e subtrai um cupom se houver desconto
    // retorna true se a compra foi confirmada, false caso contrario
}

// -------------------------------------------
// MENU PRINCIPAL
// -------------------------------------------

let opcao = -1;
const carrinho = [];

console.clear();
console.log('\n===========================================');
console.log('   SISTEMA DE PASSAGENS - CLIENTE          ');
console.log('===========================================');

while (opcao !== 0) {
    console.log('\n---- MENU ----');
    console.log('1 - Ver trechos disponiveis');
    console.log('2 - Adicionar trecho ao carrinho');
    console.log('3 - Remover trecho do carrinho');
    console.log('4 - Ver carrinho');
    console.log('5 - Finalizar compra');
    console.log('0 - Sair');
    console.log('-------------------------\n');

    opcao = parseInt(prompt('Escolha uma opcao: '));

    switch (opcao) {

        case 1:
            console.log('\n---- VISUALIZAR TRECHOS ----');
            console.log('1 - Todos os trechos');
            console.log('2 - Por companhia');
            const opcaoVisualizacao = parseInt(prompt('Escolha: '));

            if (opcaoVisualizacao === 1) listarTodosOsTrechos();
            else if (opcaoVisualizacao === 2) listarTrechosPorCompanhia();
            else console.log('\nOpcao invalida.');

            pausar();
            break;

        case 2:
            adicionarAoCarrinho(carrinho);
            pausar();
            break;

        case 3:
            removerDoCarrinho(carrinho);
            pausar();
            break;

        case 4:
            exibirCarrinho(carrinho);
            pausar();
            break;

        case 5:
            const compraFinalizada = finalizarCompra(carrinho);
            if (compraFinalizada) {
                carrinho.length = 0; // esvazia o carrinho apos a compra
            }
            pausar();
            break;

        case 0:
            console.log('\nFinalizando o sistema... Ate logo!\n');
            break;

        default:
            console.log('\nOpcao invalida! Tente novamente.');
            pausar();
            break;
    }
}
```


## Dicas

- Comecem sempre pelo `database.js`; sem ele, os outros módulos não funcionam;
- Usem `db.prepare('...').run(...)` para inserções, atualizações e exclusões, e `db.prepare('...').get(...)` ou `.all()` para consultas;
- Lembrem de usar `JOIN` ao buscar trechos e cupons, para trazer o nome da companhia junto;
- O carrinho do cliente é apenas um array em memória; ele não precisa ir para o banco;
- Testem o `companhia.js` primeiro, cadastrando algumas companhias, trechos e cupons, antes de abrir o `cliente.js`.


## Desafio

Se quiser ir além, implemente uma tabela de **Venda** no banco de dados para registrar cada compra realizada. Ela deve guardar a data e hora da compra, o valor total pago e os trechos adquiridos. Isso não é obrigatório, mas é um ótimo exercício para consolidar tudo que aprendemos.


## Guardando o projeto no GitHub

Assim que terminarem a aula, não esqueçam de subir o projeto para o GitHub. Sigam os passos:

1. Abram o GitHub e criem um repositório **privado** chamado `sistema-passagens`;
2. Abram o repositório criado;
3. Enviem os três arquivos (`database.js`, `companhia.js` e `cliente.js`) usando a opção `Upload files`;
4. Antes de saírem, sempre atualizem o repositório com o código mais recente — vocês vão continuar mexendo nesse projeto nas próximas aulas.