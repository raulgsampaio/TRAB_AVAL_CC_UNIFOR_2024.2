async function buscarDados() {
    const dados = '{ "name": "Luke", "idade": 23 }';

    try {
        const personagem = JSON.parse(dados);
        console.log(`Nome: ${personagem.name}`);
        console.log(`Idade: ${personagem.idade}`);
    } catch (erro) {
        console.error("Erro ao fazer o parse do JSON:", erro.message);
    }
}

buscarDados();
