async function buscarNave(url) {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error('Falha ao buscar a nave.');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar a nave:', erro.message);
        return null;
    }
}

function exibirDetalhesNave(nave) {
    const detalhes = `
    Nome: ${nave.name}
    Modelo: ${nave.model}
    Fabricante: ${nave.manufacturer}
    `;
    console.log("Detalhes da Nave:");
    console.log(detalhes);
}

function avaliarTamanhoTripulacao(tamanhoTripulacao) {
    const tripulacao = parseInt(tamanhoTripulacao);
    if (tripulacao > 100) {
        console.log('Esta é uma nave grande.');
    } else {
        console.log('Esta é uma nave pequena.');
    }
}

async function buscarEDetalharNave() {
    const url = 'https://swapi.dev/api/starships/9/';
    const nave = await buscarNave(url);

    if (nave) {
        exibirDetalhesNave(nave);
        avaliarTamanhoTripulacao(nave.crew);
    }
}

buscarEDetalharNave();

