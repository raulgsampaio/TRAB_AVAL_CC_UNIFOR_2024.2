async function buscarEspecie() {
    try {
        const resposta = await fetch("https://swapi.dev/api/species/1/");
        
        
        if (!resposta.ok) {
            throw new Error("Erro ao buscar a espécie.");
        }

        const especie = await resposta.json();

        
        const averageLifespan = typeof especie.average_lifespan === "string" 
            ? especie.average_lifespan.toUpperCase() 
            : especie.average_lifespan;

        console.log(`Expectativa de vida média: ${averageLifespan}`);
    } catch (erro) {
        console.error("Erro ao buscar a espécie:", erro.message);
    }
}

buscarEspecie();

