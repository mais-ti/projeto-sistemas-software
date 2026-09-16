# Exercício

Crie um código que tenha uma classe `Imovel` que guarde as seguintes informações: `tipo` (que pode ser `"casa"` ou `"apartamento"`), `quartos`, `banheiros`, `area` (em m²) e `bairro`.

Além desses atributos, a classe precisa ter dois métodos:
* `anuncio`, que não recebe nenhum parâmetro e retorna uma string formatada com as informações do imóvel, pronta para ser exibida em um anúncio. Ex.: `imovel1.anuncio()` deve retornar algo como `"apartamento com 2 quartos, 1 banheiro e 65m² no bairro Atalaia."`
* `atendeCriterios`, que vai receber um número mínimo de quartos e um bairro desejado, e retorna `true` se o imóvel tiver **pelo menos** aquele número de quartos **e** estiver naquele bairro, ou `false` caso contrário. Ex.: `imovel1.atendeCriterios(2, "Atalaia")`

## Estrutura do código
A estrutura do código serve como base para a resolução do exercício. Você pode ficar a vontade para copiar essa estrutura ou fazer o seu código totalmente do zero.

⚠️ **Atenção:** O uso da estrutura é opcional, porém, os casos de teste (no final da estrutura) devem funcionar corretamente! Desse modo, o nome da classe e os nomes dos métodos devem ser os mesmos.

```javascript
class Imovel{
    constructor(tipo, quartos, banheiros, area, bairro){
        this.tipo = tipo;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.area = area;
        this.bairro = bairro;
    }

    anuncio(){

    }

    atendeCriterios(quartosMinimos, bairroDesejado){

    }
}

//Casos de teste
let imovel1 = new Imovel("apartamento", 2, 1, 65, "Atalaia")
let imovel2 = new Imovel("casa", 3, 2, 120, "Jardins")

console.log(imovel1.anuncio())
console.log(imovel2.anuncio())

console.log(imovel1.atendeCriterios(2, "Atalaia"))
console.log(imovel1.atendeCriterios(3, "Atalaia"))
console.log(imovel2.atendeCriterios(2, "Jardins"))
console.log(imovel2.atendeCriterios(3, "Farolândia"))
```
