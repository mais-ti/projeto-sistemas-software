# Persistência de Dados com Arquivos JSON


## O problema da memória

Até agora, tudo que o nosso código armazena — objetos, arrays, variáveis — existe apenas enquanto o programa está rodando. Quando ele encerra, tudo some.

Imagine cadastrar 50 companhias aéreas e, ao fechar o terminal, perder tudo. Para resolver isso, precisamos de alguma forma de **persistência de dados**, ou seja, salvar as informações em algum lugar que sobreviva ao encerramento do programa.


## Opções de persistência

Existem várias formas de persistir dados, e cada uma tem seu contexto ideal:

- **Arquivos**: a forma mais simples. Os dados são salvos diretamente no sistema de arquivos da máquina;
- **Bancos de dados relacionais (SQL)**: organizam os dados em tabelas, com suporte a consultas, relacionamentos e controle de integridade;
- **Bancos de dados não relacionais (NoSQL)**: mais flexíveis, ideais para dados que não se encaixam bem em tabelas.

Neste material, vamos focar nos **arquivos**, especificamente no formato **JSON**.


## O formato JSON

JSON (JavaScript Object Notation) é um formato de texto para representar dados estruturados. A sintaxe é praticamente idêntica à dos objetos e arrays em JavaScript:

```json
{
  "companhias": [
    { "nome": "LATAM", "trechos": [] },
    { "nome": "Gol", "trechos": [] }
  ],
  "trechos": [
    { "companhia": "LATAM", "origem": "Recife", "destino": "São Paulo", "valor": 450.00 }
  ]
}
```

Por ser texto puro, um arquivo JSON pode ser aberto em qualquer editor e lido por praticamente qualquer linguagem de programação.


## Lendo e escrevendo arquivos em JavaScript

Em JS, o módulo `fs` (File System) é o responsável por lidar com arquivos. Não é preciso instalar nada — ele já vem com o Node.

```js
const fs = require('fs');
```

### Lendo um arquivo

```js
const conteudo = fs.readFileSync('dados.json', 'utf-8');
const dados = JSON.parse(conteudo);
```

- `readFileSync` lê o arquivo e retorna o conteúdo como texto;
- `JSON.parse` converte esse texto em um objeto JavaScript.

### Escrevendo em um arquivo

```js
const texto = JSON.stringify(dados, null, 2);
fs.writeFileSync('dados.json', texto);
```

- `JSON.stringify` converte o objeto de volta para texto no formato JSON;
- O segundo argumento `null` e o terceiro `2` são opcionais: eles formatam o JSON com indentação de 2 espaços, deixando o arquivo mais legível;
- `writeFileSync` salva o texto no arquivo. Se o arquivo não existir, ele é criado automaticamente.

### Lidando com arquivo não existente

Na primeira execução do programa, o arquivo de dados ainda não existe. Por isso, é importante verificar isso antes de tentar lê-lo:

```js
function carregar() {
    if (!fs.existsSync('dados.json')) {
        return { companhias: [], trechos: [] };
    }
    const conteudo = fs.readFileSync('dados.json', 'utf-8');
    return JSON.parse(conteudo);
}
```

- `existsSync` retorna `true` se o arquivo existir e `false` caso contrário;
- Se o arquivo não existir, retornamos uma estrutura vazia como ponto de partida.


## Vantagens e desvantagens

**Vantagens:**
- Simples de implementar, não exige nenhuma configuração externa;
- O arquivo pode ser aberto e lido manualmente em qualquer editor;
- Funciona bem para sistemas pequenos com poucos dados.

**Desvantagens:**
- Não é eficiente para grandes volumes de dados;
- Não tem suporte nativo a buscas, filtros ou relacionamentos como um banco de dados teria;
- Se dois programas tentarem escrever no arquivo ao mesmo tempo, pode haver conflito.

Para sistemas simples e com volume de dados reduzido, arquivos JSON são uma solução prática e suficiente.