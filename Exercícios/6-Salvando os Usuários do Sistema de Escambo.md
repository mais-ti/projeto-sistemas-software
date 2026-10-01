# Exercício

No exercício anterior, construímos o cadastro e o login do sistema de escambo. Ele funciona bem enquanto está rodando, mas ao encerrar o programa, todos os usuários cadastrados são perdidos.

Hoje, vamos resolver isso. O seu trabalho é adaptar o sistema para que os usuários sejam **salvos em um arquivo JSON** e **carregados automaticamente** toda vez que o programa iniciar.

Para isso, o seu código precisa:

* Criar dois métodos na classe `Sistema`: `salvar()` e `carregar()`;
* O método `carregar()` deve ser chamado **uma única vez**, logo no início do programa, para preencher o array `usuarios` (e o contador de ids) com os dados do arquivo;
* O método `salvar()` deve ser chamado **toda vez que os dados forem modificados**. Por enquanto, isso acontece em um único lugar: quando um novo usuário é cadastrado;
* O arquivo JSON deve se chamar `escambo.json` e ser criado automaticamente na primeira execução.

**Obs.:** Evite reescrever o que já está funcionando. O menu, as classes e a lógica dos outros métodos não precisam mudar, apenas acrescente o necessário para que os dados persistam.

## O que vai para o arquivo?

Nem tudo que existe no `Sistema` precisa ser salvo. Vamos pensar em cada atributo:

| Atributo | Salvar? | Por quê? |
|---|---|---|
| `usuarios` | Sim | São os dados que não podemos perder |
| `proximoIdUsuario` | Sim | Se não salvarmos, ao reabrir o programa ele volta para 1 e os novos usuários receberiam ids que já existem |
| `categorias` | Não | São sempre as mesmas e já são criadas no `constructor` |
| `usuarioLogado` | Não | Ao reabrir o programa, a pessoa precisa entrar de novo |

Então o arquivo `escambo.json` deve ficar parecido com este (aqui, com dois usuários cadastrados):

```json
{
  "usuarios": [
    { "id": 1, "nome": "Ana Souza", "email": "ana@email.com", "senha": "1234", "interesses": [] },
    { "id": 2, "nome": "Carlos Lima", "email": "carlos@email.com", "senha": "abcd", "interesses": [] }
  ],
  "proximoIdUsuario": 3
}
```

## O que usar

Tudo o que você precisa está no resumo **Persistência de dados**. Relembrando:

* `const fs = require('fs');` para usar o módulo de arquivos (não precisa instalar nada);
* `JSON.stringify(dados, null, 2)` para transformar um objeto em texto JSON;
* `fs.writeFileSync('arquivo.json', texto)` para salvar o texto no arquivo (se ele não existir, é criado);
* `fs.existsSync('arquivo.json')` para verificar se o arquivo existe;
* `fs.readFileSync('arquivo.json', 'utf-8')` para ler o texto do arquivo;
* `JSON.parse(texto)` para transformar o texto JSON de volta em objeto.

## Onde mexer no código

Você vai alterar **quatro lugares** do código do exercício anterior:

1. **No topo do arquivo:** importar o `fs`;
2. **Na classe `Sistema`:** criar os métodos `salvar()` e `carregar()`;
3. **No método `cadastrarUsuario`:** chamar o `salvar()` quando um usuário for cadastrado com sucesso;
4. **Logo depois de criar o sistema** (`const sistema = new Sistema();`): chamar o `carregar()`.

Veja abaixo uma visão geral (não é um código completo, é só um mapa de onde cada coisa vai):

```javascript
const prompt = require('prompt-sync')();
// 1) importe o fs aqui

// ... classes Usuario, Categoria, Item e Escambo (sem alterações)

class Sistema {
    // ... constructor, pausar e posicaoDoEmail (sem alterações)

    cadastrarUsuario(nome, email, senha) {
        // ... (3) aqui você precisa chamar o salvar()
    }

    // ... login e logout (sem alterações)

    // PERSISTÊNCIA
    salvar() {
        //complete o código aqui
    }

    carregar() {
        //complete o código aqui
    }
}

const sistema = new Sistema();
// 4) chame o carregar() aqui

// ... menu (sem alterações)
```

⚠️ **Atenção:** Os nomes dos métodos (`salvar` e `carregar`) e do arquivo (`escambo.json`) devem ser exatamente esses.

## Dicas

* No `salvar()`, monte primeiro um objeto com os dois dados que vão para o arquivo (`usuarios` e `proximoIdUsuario`) e só depois transforme em texto;
* No `carregar()`, lembre-se de que, na **primeira execução**, o arquivo ainda não existe. Verifique isso antes de tentar ler, senão o programa vai dar erro;
* Dentro dos métodos da classe, use `this` para acessar `usuarios` e `proximoIdUsuario`.

## Roteiro de teste

Teste o sistema seguindo esta sequência:

1. **Apague** o arquivo `escambo.json`, caso ele exista, e execute o programa. Ele deve abrir normalmente, mesmo sem o arquivo;
2. Crie duas contas e depois encerre o programa;
3. Verifique que o arquivo `escambo.json` foi criado na pasta do projeto. Abra-o em um editor e confira se ele se parece com o exemplo acima;
4. Execute o programa de novo e entre com uma das contas que você criou (o login deve funcionar, sem precisar cadastrar de novo);
5. Tente criar uma conta com o e-mail de um usuário que já existia (deve aparecer o aviso de e-mail repetido);
6. Crie uma terceira conta. Ela deve ter o `id` 3 (e não 1);
7. Encerre o programa, abra o arquivo de novo e confira se os três usuários estão lá.

