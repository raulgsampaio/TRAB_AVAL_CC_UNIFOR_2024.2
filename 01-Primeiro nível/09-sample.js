class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInformacoes() {
        console.log(`Gestor: ${this.nome}, Idade: ${this.idade} anos`);
    }
}

const gestor = new Gestor("Lucas", 40);
gestor.exibirInformacoes();

