# Exercício

No exercício anterior, construímos um sistema de gerenciamento de companhias aéreas. Ele funciona bem enquanto está rodando, mas ao encerrar o programa, todas as companhias e trechos cadastrados são perdidos.

Hoje, vamos resolver isso. O seu trabalho é adaptar o sistema para que os dados sejam **salvos em um arquivo JSON** e **carregados automaticamente** toda vez que o programa iniciar.

Para isso, o seu código precisa:

* Criar duas funções: `salvar()` e `carregar()`;
* A função `carregar()` deve ser chamada **uma única vez**, logo no início do programa, para preencher os arrays `companhias` e `trechos` com os dados do arquivo;
* A função `salvar()` deve ser chamada **toda vez que os dados forem modificados**, ou seja, após qualquer operação de cadastro, edição ou exclusão;
* O arquivo JSON deve se chamar `passagens.json` e ser criado automaticamente na primeira execução.

**Obs.:** Evite reescrever o que já está funcionando. O menu, as classes e a lógica dos métodos não precisam mudar, apenas acrescente o necessário para que os dados persistam.