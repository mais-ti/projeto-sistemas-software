# Exercício

Na última aula, modelamos juntos um sistema de **escambo**, ou seja, um sistema onde as pessoas trocam objetos entre si. Nas próximas aulas, vamos construir esse sistema aos poucos, um pedaço de cada vez.

Hoje vamos começar pelo alicerce: as **classes** que representam as "coisas" que o sistema precisa lembrar. Ainda não teremos menu, cadastro ou arquivos. O seu trabalho é transformar a nossa modelagem em código, criando as classes.

Ao final deste exercício, você deve saber:

* Quais são as classes do sistema;
* O que cada classe guarda;
* Por que o sistema precisa dessas classes.

## Por que essas classes?

Antes de escrever código, vamos entender de onde elas vêm. Pense no que o sistema permite fazer e no que ele precisa **lembrar** para isso funcionar:

| O que o sistema permite | O que ele precisa lembrar | Classe |
|---|---|---|
| Criar conta e entrar no sistema | Os dados de cada pessoa | `Usuario` |
| Escolher interesses e buscar itens por categoria | As categorias em que os objetos se organizam | `Categoria` |
| Cadastrar, editar e excluir itens; buscar os itens de outras pessoas | Os objetos que as pessoas querem trocar | `Item` |
| Sugerir, aceitar ou negar uma troca; consultar o histórico | Cada proposta de troca e como ela terminou | `Escambo` |

Cada linha da tabela vira uma classe. Repare que a troca em si (`Escambo`) também precisa ser uma classe: sem ela, o sistema não teria onde guardar quem propôs, o que foi oferecido e se a proposta foi aceita ou negada.

Vai faltar ainda uma classe que junta tudo e controla o sistema. Ela vai aparecer na próxima parte.

## Antes de começar: o que é o "número de identificação"?

Quase todas as classes abaixo guardam um **número de identificação**. Ele é único para cada objeto e nunca se repete. Funciona como a senha do exercício da fila de atendimento: a primeira pessoa recebeu a senha 1, a segunda recebeu a senha 2, e assim por diante.

Por que precisamos disso? Porque duas pessoas podem se chamar "Ana Souza" e dois itens podem se chamar "Bicicleta". O número de identificação é o que diferencia um do outro.

Existe ainda uma segunda ideia importante: quando um objeto precisa "apontar" para outro, ele guarda **apenas o número de identificação** do outro. Por exemplo, em vez de guardar o usuário inteiro dentro do item, o item guarda só o número do usuário que o cadastrou. É como escrever o CPF de alguém em um formulário, em vez de anexar a pessoa inteira.

## O que cada classe precisa guardar

**Usuario**

* o número de identificação;
* o nome da pessoa;
* o e-mail;
* a senha;
* as categorias em que a pessoa tem interesse. Como ela pode ter vários interesses, isso deve ser uma **lista**. Ela começa vazia, e não é informada na criação do usuário.

**Categoria**

* o número de identificação;
* o nome da categoria (por exemplo, "Livros e Revistas"). As categorias do nosso sistema já estão definidas logo abaixo.

**Item**

* o número de identificação;
* o nome do item (por exemplo, "Bicicleta aro 26");
* a descrição do item;
* a categoria a que ele pertence;
* o usuário que é dono dele;
* a situação do item. Todo item começa com a situação `"disponivel"`. Depois de trocado, ela passará a ser `"trocado"`.

**Escambo**

* o número de identificação;
* o item que a pessoa quer receber;
* o item que a pessoa oferece em troca;
* o usuário que sugeriu a troca;
* o usuário que vai aceitar ou negar (o dono do item desejado);
* a situação da proposta. Todo escambo começa com a situação `"pendente"`. Depois, ela pode passar a ser `"aceito"` ou `"recusado"`.

Lembre-se da regra do número de identificação: onde o texto diz "a categoria", "o usuário" ou "o item", guarde **apenas o número de identificação** dele.

## As categorias do sistema

Para não deixar o projeto grande demais, o nosso sistema vai trabalhar com apenas **4 categorias**. Elas serão as mesmas do começo ao fim do projeto, e os usuários não criam categorias novas:

| Número de identificação | Nome |
|---|---|
| 1 | Eletrônicos |
| 2 | Roupas e Acessórios |
| 3 | Livros e Revistas |
| 4 | Esportes e Lazer |

Você não precisa inventar nada aqui: basta copiar os números e os nomes exatamente como estão na tabela.

## O que você precisa fazer

* Criar as quatro classes: `Usuario`, `Categoria`, `Item` e `Escambo`, com o `constructor` de cada uma;
* Criar os quatro objetos da classe `Categoria`, copiando os números e os nomes da tabela acima;
* Escolher **nomes claros** para os atributos, sem acento e no estilo camelCase que vimos na aula de introdução;
* Fazer o `constructor` receber os dados na **mesma ordem** em que aparecem nas listas acima, exceto os que já começam com um valor fixo (a lista de interesses e as situações);
* Usar os textos `"disponivel"`, `"trocado"`, `"pendente"`, `"aceito"` e `"recusado"` exatamente assim, sem acento.

Para lembrar como escrever uma classe, consulte a apostila de Objetos (a classe `Carro`).

⚠️ **Atenção:** Os nomes das quatro classes devem ser exatamente os indicados acima.

## Testando as suas classes

Depois de criar as classes, monte o cenário abaixo criando os objetos correspondentes.

* **Usuários:**
  * Número 1: Ana Souza, e-mail `ana@email.com`, senha `1234`. Ela tem interesse na categoria número 3;
  * Número 2: Carlos Lima, e-mail `carlos@email.com`, senha `abcd`. Ele ainda não escolheu interesses.
* **Categorias:** as quatro categorias da tabela acima.
* **Itens:**
  * Número 1: "Bicicleta aro 26", com a descrição "Bicicleta com 18 marchas, em bom estado.", da categoria 4, cujo dono é a Ana;
  * Número 2: "Dom Casmurro", com a descrição "Edição de bolso, sem rasuras.", da categoria 3, cujo dono é o Carlos.
* **Escambo:**
  * Número 1: a Ana quer o "Dom Casmurro" e oferece a "Bicicleta aro 26" em troca. Quem propôs foi a Ana e quem vai responder é o Carlos.

Depois, siga estes passos:

1. Mostre cada objeto na tela com `console.log` e confira se todas as informações estão lá;
2. Confira se o item e o escambo mostram as situações iniciais corretas;
3. Simule que o Carlos **aceitou** a troca: mude a situação do escambo para `"aceito"` e a situação dos dois itens para `"trocado"`;
4. Mostre o escambo e os dois itens de novo e confira as mudanças.

**Obs.:** Guarde o seu código, mas não se preocupe se os nomes que você escolheu forem diferentes dos dos seus colegas. Na próxima parte, você receberá as classes com os nomes padronizados, para todos seguirem juntos.