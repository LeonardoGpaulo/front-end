export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
}

const meuCarro  = new Carro("Opala", 1972)
const carroDoPalandi = new Carro("buggati chiron", 2022)
console.log("O palandi tem o carro " + carroDoPalandi.nome + " e tem " + carroDoPalandi.idade() + " anos.")

console.log(meuCarro.nome);
console.log("A idade do meu carro é " + meuCarro.idade() + " anos.");