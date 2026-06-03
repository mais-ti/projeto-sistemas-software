# Exercício
Vamos montar um pequeno banco de dados para uma biblioteca comunitária. A ideia é usar SQL para criar esse banco e o site [programiz](https://www.programiz.com/sql/online-compiler) para executarmos os códigos.

> ⚠️ **Atenção**  
> Antes de começar o exercício, é necessário apagar as tabelas de exemplo que aparecem no editor. Para isso, rode o comando abaixo:
> ```sql
> DROP TABLE Customers;
> DROP TABLE  Orders;
> DROP TABLE  Shippings; 
> ```

## 1 - Criando a tabela

Crie uma tabela chamada `livros` contendo:

| coluna    | tipo         |
| --------- | ------------ |
| id        | INTEGER      |
| titulo    | VARCHAR(100) |
| autor     | VARCHAR(100) |
| ano       | INTEGER      |
| categoria | VARCHAR(50)  |

### Regras

* O campo `id` deve ser chave primária;
* O campo `titulo` deve ser obrigatório.


## 2 - Inserindo registros

Cadastre os seguintes livros:

| id | titulo                 | autor            | ano  | categoria |
| -- | ---------------------- | ---------------- | ---- | --------- |
| 1  | O Hobbit               | Tolkien          | 1937 | Fantasia  |
| 2  | Dom Casmurro           | Machado de Assis | 1899 | Romance   |
| 3  | Capitães da Areia      | Jorge Amado      | 1937 | Romance   |
| 4  | Harry Potter           | J.K. Rowling     | 1997 | Fantasia  |
| 5  | A Revolução dos Bichos | George Orwell    | 1945 | Ficção    |


## 3 - Consultas simples

Faça consultas para:

1. Exibir todos os livros;
2. Exibir apenas os títulos;
3. Exibir apenas os títulos e autores.


## 4 - Utilizando filtros

Faça consultas para:

1. Mostrar livros publicados após 1940;
2. Mostrar livros da categoria Fantasia;
3. Mostrar livros publicados após 1900 e antes de 1990;
4. Mostrar livros escritos por Tolkien ou George Orwell;


## 5 - Ordenação

Faça consultas para:

1. Listar os livros por título em ordem alfabética;
2. Listar os livros do mais antigo para o mais recente;
3. Listar os livros do mais recente para o mais antigo.


## 6 - Atualizando dados

Realize as seguintes alterações:

1. Atualize o ano de publicação de Dom Casmurro para 1900;
2. Altere a categoria de Harry Potter para Literatura Fantástica.


## 7 - Excluindo dados

1. Exclua o livro A Revolução dos Bichos;
2. Liste todos os livros para verificar o resultado.


## 8 - Removendo a tabela

Remova completamente a tabela livros.


## Dicas

* Execute as atividades na ordem apresentada;
* Escreva as palavras reservadas do SQL em MAIÚSCULO;
* Utilize `SELECT *` para conferir o resultado após modificações;
* Leia atentamente os filtros antes de escrever as consultas;
* Sempre utilize `WHERE` em operações de UPDATE e DELETE para evitar alterações indesejadas.