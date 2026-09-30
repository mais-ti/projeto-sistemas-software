class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.interesses = [];
    }
}

class Categoria {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Item {
    constructor(id, nome, descricao, idCategoria, idDono) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.idCategoria = idCategoria;
        this.idDono = idDono;
        this.status = "disponivel";
    }
}

class Escambo {
    constructor(id, idItemDesejado, idItemOferecido, idProponente, idDestinatario) {
        this.id = id;
        this.idItemDesejado = idItemDesejado;
        this.idItemOferecido = idItemOferecido;
        this.idProponente = idProponente;
        this.idDestinatario = idDestinatario;
        this.status = "pendente";
    }
}


// Cenário

let ana = new Usuario(1, "Ana Souza", "ana@email.com", "1234");
let carlos = new Usuario(2, "Carlos Lima", "carlos@email.com", "abcd");
ana.interesses.push(3);

let eletronicos = new Categoria(1, "Eletrônicos");
let roupas = new Categoria(2, "Roupas e Acessórios");
let livros = new Categoria(3, "Livros e Revistas");
let esportes = new Categoria(4, "Esportes e Lazer");

let bicicleta = new Item(1, "Bicicleta aro 26", "Bicicleta com 18 marchas, em bom estado.", 4, 1);
let livro = new Item(2, "Dom Casmurro", "Edição de bolso, sem rasuras.", 3, 2);

let escambo1 = new Escambo(1, 2, 1, 1, 2);

console.log(ana);
console.log(carlos);
console.log(eletronicos);
console.log(roupas);
console.log(livros);
console.log(esportes);
console.log(bicicleta);
console.log(livro);
console.log(escambo1);

// Carlos aceitou o escambo
escambo1.status = "aceito";
bicicleta.status = "trocado";
livro.status = "trocado";

console.log(escambo1);
console.log(bicicleta);
console.log(livro);