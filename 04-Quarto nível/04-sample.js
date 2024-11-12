async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID.");
        }

        const personagem = await resposta.json();
        console.log(`Nome do personagem: ${personagem.name}`);
    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro.message);
    }
}

const lukeId = 1;
buscarPersonagem(lukeId);
