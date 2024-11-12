async function buscarPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        if (!resposta.ok) throw new Error('Erro ao buscar o planeta');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar o planeta:', erro.message);
        return null;
    }
}

function exibirDetalhesPlaneta(planeta) {
    const detalhes = `
    Nome: ${planeta.name}
    Clima: ${planeta.climate}
    População: ${planeta.population}
    `;
    console.log("Detalhes do Planeta:");
    console.log(detalhes);
}

function avaliarPopulacao(populacao) {
    const populacaoNumerica = parseInt(populacao);
    if (isNaN(populacaoNumerica)) {
        console.log("População desconhecida.");
    } else if (populacaoNumerica > 1000000) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}

async function buscarEDetalharPlaneta(idPlaneta) {
    const planeta = await buscarPlaneta(idPlaneta);

    if (planeta) {
        exibirDetalhesPlaneta(planeta);
        avaliarPopulacao(planeta.population);
    }
}

// Exemplo de uso
buscarEDetalharPlaneta(1);
