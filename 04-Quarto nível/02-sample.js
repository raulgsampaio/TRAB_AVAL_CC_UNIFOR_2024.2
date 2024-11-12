async function buscarFilme() {
    try {
        const resposta = await fetch("https://swapi.dev/api/films/1/");
        if (!resposta.ok) {
            throw new Error("Erro ao buscar o filme");
        }

        const filme = await resposta.json();
        console.log(filme.title.toUpperCase());

        exibirTituloFilme(filme.title);
    } catch (erro) {
        console.error("Erro:", erro.message);
        exibirErro("Não foi possível buscar o filme. Tente novamente mais tarde.");
    }
}

function exibirTituloFilme(titulo) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Título do Filme: <strong>${titulo.toUpperCase()}</strong></p>`;
}

function exibirErro(mensagem) {
    const resultadoDiv = 
