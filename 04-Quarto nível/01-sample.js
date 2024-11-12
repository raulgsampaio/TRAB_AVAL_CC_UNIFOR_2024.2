async function buscarPlaneta() {
    try {
        const resposta = await fetch("https://swapi.dev/api/planets/1/");
        if (!resposta.ok) {
            throw new Error("Erro ao buscar o planeta");
        }
        
        const planeta = await resposta.json();
        console.log(planeta.name);

        exibirNomePlaneta(planeta.name);
    } catch (erro) {
        console.error("Erro:", erro.message);
        exibirErro("Não foi possível buscar o planeta. Tente novamente mais tarde.");
    }
}

function exibirNomePlaneta(nome) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Nome do Planeta: <strong>${nome}</strong></p>`;
}

function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p style="color: red;">${mensagem}</p>`;
}

buscarPlaneta();
