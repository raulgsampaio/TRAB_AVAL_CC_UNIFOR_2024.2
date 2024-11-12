function descreverUsuario(nomeUsuario, idadeUsuario, usuarioAtivo) {
    if (usuarioAtivo) {
        console.log(`${nomeUsuario} tem ${idadeUsuario} anos e está ativo.`);
    } else {
        console.log(`${nomeUsuario} está inativo.`);
    }
}

const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const usuarioAtivo = true;

descreverUsuario(nomeUsuario, idadeUsuario, usuarioAtivo);
