let sistemaAtivo = true;

function verificarAcesso(usuario) {
    const { admin } = usuario;
    if (sistemaAtivo && admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificarAcesso(usuario);