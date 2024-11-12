const usuario = {
    nome: "João",
    idade: 25
};

function exibirUsuario({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos.`);
}

exibirUsuario(usuario);
