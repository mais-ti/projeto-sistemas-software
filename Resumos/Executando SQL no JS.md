# SQL com JavaScript

Este material mostra como executar operações de banco de dados diretamente pelo JavaScript, usando a biblioteca `better-sqlite3`. Use como referência sempre que precisar!


## Como funciona

A `better-sqlite3` permite que você escreva comandos SQL dentro do JavaScript e execute-os diretamente no banco. O fluxo é sempre o mesmo: você **prepara** o comando com `.prepare()` e depois **executa** com um dos métodos disponíveis.

```js
const Database = require('better-sqlite3');
const db = new Database('meuBanco.db');
```

A partir daí, `db` é a sua conexão com o banco. Todos os exemplos abaixo partem dessa variável.


## Tabelas de exemplo

Ao longo deste material, vamos trabalhar com duas tabelas de uma biblioteca:

**Livro**
| id | titulo | genero | anoPublicacao | idAutor |
|---|---|---|---|---|
| 1 | O Senhor dos Anéis | Fantasia | 1954 | 1 |
| 2 | A Revolução dos Bichos | Sátira | 1945 | 2 |
| 3 | O Hobbit | Fantasia | 1937 | 1 |
| 4 | 1984 | Distopia | 1949 | 2 |

**Autor**
| id | nome | nacionalidade |
|---|---|---|
| 1 | J.R.R. Tolkien | Britânico |
| 2 | George Orwell | Britânico |

Para criar essas tabelas e inserir os dados iniciais, usamos o `.exec()`:

```js
db.exec(`
    CREATE TABLE IF NOT EXISTS Autor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        nacionalidade TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Livro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        genero TEXT NOT NULL,
        anoPublicacao INTEGER NOT NULL,
        idAutor INTEGER NOT NULL,
        FOREIGN KEY (idAutor) REFERENCES Autor(id)
    );
`);
```

> O `.exec()` é usado para executar um bloco de SQL de uma vez, sem parâmetros e sem retorno. É ideal para criação de tabelas na inicialização do sistema.


## INSERT

O `.run()` é usado para comandos que **modificam** o banco: INSERT, UPDATE e DELETE. Ele retorna um objeto com duas informações úteis:

- `lastInsertRowid`: o id gerado automaticamente para o registro inserido;
- `changes`: o número de linhas afetadas pela operação.

```js
const resultado = db.prepare(`
    INSERT INTO Autor (nome, nacionalidade) VALUES (?, ?)
`).run('J.R.R. Tolkien', 'Britânico');

console.log(resultado.lastInsertRowid); // 1
console.log(resultado.changes);         // 1
```

Os `?` são os **parâmetros** do comando — eles são substituídos pelos valores passados no `.run()`, na mesma ordem. Isso evita erros e problemas de segurança.

Após os quatro inserts, a tabela **Autor** fica assim:

| id | nome | nacionalidade |
|---|---|---|
| 1 | J.R.R. Tolkien | Britânico |
| 2 | George Orwell | Britânico |

E a tabela **Livro**:

| id | titulo | genero | anoPublicacao | idAutor |
|---|---|---|---|---|
| 1 | O Senhor dos Anéis | Fantasia | 1954 | 1 |
| 2 | A Revolução dos Bichos | Sátira | 1945 | 2 |
| 3 | O Hobbit | Fantasia | 1937 | 1 |
| 4 | 1984 | Distopia | 1949 | 2 |


## SELECT

Para consultas, existem dois métodos:

- `.get()`: retorna **um único objeto** (o primeiro resultado encontrado), ou `undefined` se não encontrar nada;
- `.all()`: retorna um **array de objetos**, um para cada linha encontrada. Se não houver resultados, retorna um array vazio `[]`.

### Buscando um registro pelo id

```js
const livro = db.prepare('SELECT * FROM Livro WHERE id = ?').get(1);

console.log(livro);
// { id: 1, titulo: 'O Senhor dos Anéis', genero: 'Fantasia', anoPublicacao: 1954, idAutor: 1 }
```

O retorno é um **objeto JavaScript** com cada coluna da tabela como propriedade. Para acessar o título, por exemplo: `livro.titulo`.

### Buscando todos os registros

```js
const livros = db.prepare('SELECT * FROM Livro').all();

console.log(livros.length); // 4

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].titulo);
}
// O Senhor dos Anéis
// A Revolução dos Bichos
// O Hobbit
// 1984
```

O retorno é um **array de objetos**. Cada posição do array é um objeto representando uma linha da tabela.

### Buscando com filtro

```js
const livrosFantasia = db.prepare('SELECT * FROM Livro WHERE genero = ?').all('Fantasia');

// retorna:
// [
//   { id: 1, titulo: 'O Senhor dos Anéis', genero: 'Fantasia', anoPublicacao: 1954, idAutor: 1 },
//   { id: 3, titulo: 'O Hobbit', genero: 'Fantasia', anoPublicacao: 1937, idAutor: 1 }
// ]
```

### Verificando se um registro existe

Como o `.get()` retorna `undefined` quando não encontra nada, dá para usá-lo diretamente em um `if`:

```js
const autor = db.prepare('SELECT * FROM Autor WHERE id = ?').get(99);

if (!autor) {
    console.log('Autor não encontrado.');
}
```


## SELECT com JOIN: combinando tabelas

O JOIN permite buscar dados de duas tabelas ao mesmo tempo, cruzando as informações pela chave estrangeira. O retorno continua sendo um objeto (`.get()`) ou array de objetos (`.all()`), mas agora com as colunas das duas tabelas juntas.

```js
const livros = db.prepare(`
    SELECT Livro.*, Autor.nome AS nomeAutor, Autor.nacionalidade
    FROM Livro
    JOIN Autor ON Livro.idAutor = Autor.id
`).all();

console.log(livros[0]);
// {
//   id: 1,
//   titulo: 'O Senhor dos Anéis',
//   genero: 'Fantasia',
//   anoPublicacao: 1954,
//   idAutor: 1,
//   nomeAutor: 'J.R.R. Tolkien',
//   nacionalidade: 'Britânico'
// }
```

O `AS nomeAutor` cria um **apelido** para a coluna; isso é útil quando as duas tabelas têm colunas com o mesmo nome (como `id`), evitando conflito.

Para acessar o nome do autor: `livros[0].nomeAutor`.

### JOIN com filtro

```js
const livrosDoTolkien = db.prepare(`
    SELECT Livro.*, Autor.nome AS nomeAutor
    FROM Livro
    JOIN Autor ON Livro.idAutor = Autor.id
    WHERE Autor.id = ?
`).all(1);

// retorna os livros: 'O Senhor dos Anéis' e 'O Hobbit'
```


## UPDATE

Assim como o INSERT, o UPDATE usa `.run()` e retorna um objeto com `changes` indicando quantas linhas foram alteradas.

```js
db.prepare(`
    UPDATE Livro SET titulo = ?, anoPublicacao = ? WHERE id = ?
`).run('O Senhor dos Anéis (Ed. Revisada)', 1965, 1);
```

A tabela **Livro** após o UPDATE:

| id | titulo | genero | anoPublicacao | idAutor |
|---|---|---|---|---|
| 1 | O Senhor dos Anéis (Ed. Revisada) | Fantasia | 1965 | 1 |
| 2 | A Revolução dos Bichos | Sátira | 1945 | 2 |
| 3 | O Hobbit | Fantasia | 1937 | 1 |
| 4 | 1984 | Distopia | 1949 | 2 |

Para verificar se o UPDATE realmente encontrou o registro, use `changes`:

```js
const resultado = db.prepare('UPDATE Livro SET genero = ? WHERE id = ?').run('Aventura', 99);

if (resultado.changes === 0) {
    console.log('Nenhum livro foi atualizado. ID não encontrado.');
}
```


## DELETE

O DELETE também usa `.run()` e também retorna `changes`.

```js
db.prepare('DELETE FROM Livro WHERE id = ?').run(4);
```

A tabela **Livro** após o DELETE:

| id | titulo | genero | anoPublicacao | idAutor |
|---|---|---|---|---|
| 1 | O Senhor dos Anéis (Ed. Revisada) | Fantasia | 1965 | 1 |
| 2 | A Revolução dos Bichos | Sátira | 1945 | 2 |
| 3 | O Hobbit | Fantasia | 1937 | 1 |

Assim como no UPDATE, `changes` indica se algo foi de fato removido:

```js
const resultado = db.prepare('DELETE FROM Livro WHERE id = ?').run(99);

if (resultado.changes === 0) {
    console.log('Nenhum livro foi removido. ID não encontrado.');
}
```


## Resumo dos métodos

| Método | Usado para | Retorna |
|---|---|---|
| `.exec()` | Executar um bloco SQL sem parâmetros (criação de tabelas) | Nada |
| `.run()` | INSERT, UPDATE, DELETE | `{ lastInsertRowid, changes }` |
| `.get()` | SELECT que espera um único resultado | Um objeto ou `undefined` |
| `.all()` | SELECT que espera vários resultados | Um array de objetos (pode ser vazio) |