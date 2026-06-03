# Introdução ao SQL

## O que é SQL?

SQL (*Structured Query Language*) é uma linguagem utilizada para armazenar, consultar e modificar dados em bancos de dados relacionais.

Enquanto um arquivo JSON guarda os dados em um único arquivo, um banco de dados organiza as informações em **tabelas**.

Exemplo de tabela `livros`:

| id | titulo            | autor            | ano  |
| -- | ----------------- | ---------------- | ---- |
| 1  | Dom Casmurro      | Machado de Assis | 1899 |
| 2  | O Hobbit          | Tolkien          | 1937 |
| 3  | Capitães da Areia | Jorge Amado      | 1937 |

Cada linha representa um registro e cada coluna representa uma característica desse registro.

## Comandos SQL

### `CREATE TABLE`

Cria uma nova tabela.

```sql
CREATE TABLE livros (
    id INTEGER PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    ano INTEGER
);
```

### Principais restrições

#### ``PRIMARY KEY``

Identifica cada registro de forma única.

```sql
id INTEGER PRIMARY KEY
```

#### `NOT NULL`

Impede que o campo fique vazio.

```sql
titulo VARCHAR(100) NOT NULL
```


### `INSERT INTO`

Insere novos registros.

```sql
INSERT INTO livros
VALUES (1, 'Dom Casmurro', 'Machado de Assis', 1899);
```

Também é possível inserir vários registros de uma vez:

```sql
INSERT INTO livros VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899),
(2, 'O Hobbit', 'Tolkien', 1937),
(3, 'Capitães da Areia', 'Jorge Amado', 1937);
```

Após a inserção:

| id | titulo            | autor            | ano  |
| -- | ----------------- | ---------------- | ---- |
| 1  | Dom Casmurro      | Machado de Assis | 1899 |
| 2  | O Hobbit          | Tolkien          | 1937 |
| 3  | Capitães da Areia | Jorge Amado      | 1937 |


### `SELECT`

Seleciona dados de uma tabela.

Selecionar tudo:

```sql
SELECT * FROM livros;
```

Resultado:

| id | titulo            | autor            | ano  |
| -- | ----------------- | ---------------- | ---- |
| 1  | Dom Casmurro      | Machado de Assis | 1899 |
| 2  | O Hobbit          | Tolkien          | 1937 |
| 3  | Capitães da Areia | Jorge Amado      | 1937 |

Selecionar apenas algumas colunas:

```sql
SELECT titulo, autor
FROM livros;
```

Resultado:

| titulo            | autor            |
| ----------------- | ---------------- |
| Dom Casmurro      | Machado de Assis |
| O Hobbit          | Tolkien          |
| Capitães da Areia | Jorge Amado      |


### `WHERE`

Filtra os registros.

Livros publicados após 1900:

```sql
SELECT *
FROM livros
WHERE ano > 1900;
```

Resultado:

| id | titulo            | autor       | ano  |
| -- | ----------------- | ----------- | ---- |
| 2  | O Hobbit          | Tolkien     | 1937 |
| 3  | Capitães da Areia | Jorge Amado | 1937 |


## Operadores de comparação

| Operador | Significado    |
| -------- | -------------- |
| =        | igual          |
| !=       | diferente      |
| >        | maior          |
| <        | menor          |
| >=       | maior ou igual |
| <=       | menor ou igual |

Exemplo:

```sql
SELECT *
FROM livros
WHERE ano >= 1937;
```


### `AND`

Todas as condições devem ser verdadeiras.

```sql
SELECT *
FROM livros
WHERE ano >= 1900
AND autor = 'Tolkien';
```


### `OR`

Pelo menos uma condição deve ser verdadeira.

```sql
SELECT *
FROM livros
WHERE autor = 'Tolkien'
OR autor = 'Jorge Amado';
```


### `ORDER BY`

Ordena os resultados.

#### Crescente

```sql
SELECT *
FROM livros
ORDER BY ano ASC;
```

#### Decrescente

```sql
SELECT *
FROM livros
ORDER BY ano DESC;
```


### `UPDATE`

Atualiza registros existentes.

```sql
UPDATE livros
SET ano = 1900
WHERE id = 1;
```

Antes:

| id | titulo       | ano  |
| -- | ------------ | ---- |
| 1  | Dom Casmurro | 1899 |

Depois:

| id | titulo       | ano  |
| -- | ------------ | ---- |
| 1  | Dom Casmurro | 1900 |


### `DELETE`

Remove registros.

```sql
DELETE FROM livros
WHERE id = 3;
```

Resultado:

| id | titulo       |
| -- | ------------ |
| 1  | Dom Casmurro |
| 2  | O Hobbit     |


### `DROP TABLE`

Remove completamente uma tabela.

```sql
DROP TABLE livros;
```

⚠️ Atenção: todos os dados da tabela serão apagados.






