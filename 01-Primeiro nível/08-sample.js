const pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridade({ idade }) {
    return idade >= 18;
}

console.log(`É maior de idade? ${verificarMaioridade(pessoa)}`);
