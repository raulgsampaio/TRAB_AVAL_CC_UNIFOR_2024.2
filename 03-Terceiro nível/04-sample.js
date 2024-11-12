async function buscarPersonagem(idPersonagem) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        if (!resposta.ok) throw new Error('Erro ao buscar personagem');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar personagem:', erro.message);
        return null;
    }
}

async function buscarNave(urlNave) {
    try {
        const resposta = await fetch(urlNave);
        if (!resposta.ok) throw new Error('Erro ao buscar nave');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar nave:', erro.message);
        return null;
    }
}

function avaliarTamanhoTripulacao(nave) {
    const tripulacao = parseInt(nave.crew);
    if (isNaN(tripulacao)) {
        console.log(`A nave ${nave.name} possui uma tripulação desconhecida.`);
    } else if (tripulacao > 100) {
        console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
    } else {
        console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
    }
}

async function buscarPersonagemENave(idPersonagem) {
    const personagem = await buscarPersonagem(idPersonagem);

    if (personagem && personagem.starships.length > 0) {
        const nave = await buscarNave(personagem.starships[0]);
        if (nave) {
            avaliarTamanhoTripulacao(nave);
        }
    } else if (personagem) {
        console.log(`${personagem.name} não possui naves registradas.`);
    }
}

// Exemplo de uso
buscarPersonagemENave(1);
