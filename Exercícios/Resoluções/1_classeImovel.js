class Imovel{
    constructor(tipo, quartos, banheiros, area, bairro){
        this.tipo = tipo;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.area = area;
        this.bairro = bairro;
    }

    anuncio(){
        return `${this.tipo} com ${this.quartos} quartos, ${this.banheiros} banheiro(s) e ${this.area}m² no bairro ${this.bairro}.`;
    }

    atendeCriterios(quartosMinimos, bairroDesejado){
        return this.quartos >= quartosMinimos && this.bairro === bairroDesejado;
    }
}

//Casos de teste
let imovel1 = new Imovel("apartamento", 2, 1, 65, "Atalaia")
let imovel2 = new Imovel("casa", 3, 2, 120, "Jardins")

console.log(imovel1.anuncio())
// apartamento com 2 quartos, 1 banheiro(s) e 65m² no bairro Atalaia.
console.log(imovel2.anuncio())
// casa com 3 quartos, 2 banheiro(s) e 120m² no bairro Jardins.

console.log(imovel1.atendeCriterios(2, "Atalaia"))       // true
console.log(imovel1.atendeCriterios(3, "Atalaia"))       // false
console.log(imovel2.atendeCriterios(2, "Jardins"))       // true
console.log(imovel2.atendeCriterios(3, "Farolândia"))    // false