// Função principal para buscar o personagem
async function buscarPersonagem() {
    limparMensagem();

    const id = document.getElementById("personagemId").value.trim();

    if (!validarId(id)) {
        exibirMensagem("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }

        const personagem = await resposta.json();
        mostrarResultado(personagem);

    } catch (erro) {
        exibirMensagem(erro.message, "danger");
    }
}

// Função para validar o ID
function validarId(id) {
    const numeroId = parseInt(id);
    return !isNaN(numeroId) && numeroId > 0;
}

// Função para exibir mensagens de alerta (erro ou sucesso)
function exibirMensagem(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

// Função para limpar mensagens
function limparMensagem() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";
}

// Função para exibir os detalhes do personagem
function mostrarResultado(personagem) {
    exibirMensagem(`
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
    `, "success");
}
