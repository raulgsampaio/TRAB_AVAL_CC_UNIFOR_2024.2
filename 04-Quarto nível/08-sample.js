async function buscarPlanetaRecursivo(id, limite) {
    // Verifica se atingiu o limite
    if (id > limite) {
        console.log("Limite alcançado.");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);

        // Verifica se a resposta é bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Planeta com ID ${id} não encontrado.`);
        }

        const planeta = await resposta.json();
        console.log(`ID: ${id} - Nome do planeta: ${planeta.name}`);

        // Chama recursivamente para o próximo planeta
        await buscarPlanetaRecursivo(id + 1, limite);
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro.message);
    }
}

// Inicia a busca com um limite de 5 planetas
buscarPlanetaRecursivo(1, 5);
