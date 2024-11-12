async function buscarNave(id) {
    const url = `https://swapi.dev/api/starships/${id}/`;

    try {
        const resposta = await fetch(url);
        
        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Nave com ID ${id} não encontrada.`);
        }

        const nave = await resposta.json();

        // Exibe o nome da nave
        console.log(`Nome da nave: ${nave.name}`);
    } catch (erro) {
        console.error("Erro ao buscar a nave:", erro.message);
    }
}

buscarNave(10);
