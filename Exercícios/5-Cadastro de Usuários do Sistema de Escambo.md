# Exercício

Na parte anterior, criamos as classes do sistema de escambo. Hoje vamos criar a classe `Sistema`, que é quem vai controlar tudo, e a primeira funcionalidade: **criar conta e entrar** no sistema.

O seu código precisa permitir que:

* Uma pessoa **crie uma conta**, informando nome, e-mail e senha;
* Não seja possível criar duas contas com o **mesmo e-mail**;
* Uma pessoa **entre** no sistema (login), informando e-mail e senha;
* Uma pessoa **saia** da conta (logout);
* O sistema saiba **quem está logado** no momento.

## Como o sistema vai lembrar quem está logado?

A classe `Sistema` tem um atributo chamado `usuarioLogado`. Enquanto ninguém estiver logado, ele vale `null`. O `null` é um valor que significa "nada" ou "vazio", e é o valor que usamos aqui para dizer "ainda não tem ninguém logado".

Quando o login der certo, `usuarioLogado` passa a guardar o **objeto** do usuário que entrou. No logout, ele volta a ser `null`.

O menu já está pronto e usa essa informação: se `usuarioLogado` for `null`, ele mostra as opções de quem ainda não entrou. Caso contrário, mostra as opções de quem está logado.

## O que você precisa fazer

Implemente os quatro métodos abaixo, na classe `Sistema`:

* `posicaoDoEmail(email)`: faz uma **busca sequencial** no array `usuarios` (igual à função `posicaoDe` que vimos na aula de `while`). Retorna a posição do usuário que tem aquele e-mail, ou `-1` se nenhum usuário tiver;
* `cadastrarUsuario(nome, email, senha)`: se o e-mail já existir, mostra um aviso e não cadastra. Se não existir, cria um `Usuario` usando `proximoIdUsuario` como id, guarda no array `usuarios`, **aumenta** o `proximoIdUsuario` em 1 e mostra uma mensagem de sucesso;
* `login(email, senha)`: se o e-mail não existir, mostra um aviso. Se a senha estiver errada, mostra outro aviso. Se tudo estiver certo, guarda o usuário em `usuarioLogado` e mostra uma mensagem de boas-vindas;
* `logout()`: volta `usuarioLogado` para `null` e mostra uma mensagem.

Sugestão de mensagens (você pode usar outras):

* `"✅ Usuário cadastrado com sucesso!"`
* `"⚠️ Já existe um usuário cadastrado com esse e-mail."`
* `"⚠️ E-mail não cadastrado."`
* `"⚠️ Senha incorreta."`
* `"✅ Bem-vindo(a), <nome>!"`
* `"Você saiu da conta."`

## Estrutura do código

O menu já está montado para você. O seu trabalho é implementar a lógica dos métodos da classe `Sistema`. As classes `Usuario`, `Categoria`, `Item` e `Escambo` já estão completas aqui, com os nomes padronizados. Se os nomes que você usou na parte anterior forem diferentes, **use os da estrutura abaixo**, pois os métodos do `Sistema` dependem deles.

⚠️ **Atenção:** Os nomes das classes e dos métodos devem ser mantidos exatamente como estão na estrutura abaixo.

```javascript
const prompt = require('prompt-sync')();

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

class Sistema {
    constructor() {
        this.usuarios = [];
        this.categorias = [];
        this.proximoIdUsuario = 1;
        this.usuarioLogado = null;

        this.categorias.push(new Categoria(1, "Eletrônicos"));
        this.categorias.push(new Categoria(2, "Roupas e Acessórios"));
        this.categorias.push(new Categoria(3, "Livros e Revistas"));
        this.categorias.push(new Categoria(4, "Esportes e Lazer"));
    }

    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
        console.clear();
    }

    // USUÁRIOS
    posicaoDoEmail(email) {
        //complete o código aqui
    }

    cadastrarUsuario(nome, email, senha) {
        //complete o código aqui
    }

    login(email, senha) {
        //complete o código aqui
    }

    logout() {
        //complete o código aqui
    }
}

const sistema = new Sistema();
let opcao = -1;

console.clear();
console.log("\n===========================================");
console.log("      BEM-VINDO AO SISTEMA DE ESCAMBO      ");
console.log("===========================================");

while (opcao !== 0) {

    if (sistema.usuarioLogado === null) {

        console.log("\n---- MENU ----");
        console.log("1 - Criar conta");
        console.log("2 - Entrar");
        console.log("0 - Sair");
        console.log("-------------------------\n");

        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                const nomeCadastro = prompt("Nome: ");
                const emailCadastro = prompt("E-mail: ");
                const senhaCadastro = prompt("Senha: ");
                sistema.cadastrarUsuario(nomeCadastro, emailCadastro, senhaCadastro);
                sistema.pausar();
                break;
            case 2:
                const emailLogin = prompt("E-mail: ");
                const senhaLogin = prompt("Senha: ");
                sistema.login(emailLogin, senhaLogin);
                sistema.pausar();
                break;
            case 0:
                console.log("\nFinalizando o sistema... Até logo!\n");
                break;
            default:
                console.log("\n⚠️ Opção inválida! Tente novamente.");
                sistema.pausar();
                break;
        }

    } else {

        console.log("\n---- MENU (" + sistema.usuarioLogado.nome + ") ----");
        console.log("1 - Sair da conta");
        console.log("0 - Encerrar o sistema");
        console.log("-------------------------\n");

        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                sistema.logout();
                sistema.pausar();
                break;
            case 0:
                console.log("\nFinalizando o sistema... Até logo!\n");
                break;
            default:
                console.log("\n⚠️ Opção inválida! Tente novamente.");
                sistema.pausar();
                break;
        }
    }
}
```

## Roteiro de teste

Depois de implementar, teste o sistema seguindo esta sequência:

1. Crie uma conta com o e-mail `ana@email.com`;
2. Tente criar **outra** conta com o mesmo e-mail (deve aparecer o aviso);
3. Tente entrar com uma senha errada (deve aparecer o aviso);
4. Tente entrar com um e-mail que não existe (deve aparecer o aviso);
5. Entre com o e-mail e a senha corretos (o menu deve mudar e mostrar o seu nome);
6. Saia da conta (o menu deve voltar ao início);
7. Crie uma segunda conta. Ela deve ter o `id` 2.

**Obs.:** Para testar o código, lembre-se de instalar o `prompt-sync` com o comando `npm install prompt-sync` antes de rodar.

**Obs. 2:** Como ainda não salvamos nada em arquivo, ao fechar o programa todos os usuários cadastrados são perdidos. Vamos resolver isso mais para frente.