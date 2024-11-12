async function buscarPersonagem() {
    const id = 1000000000000;
    const url = `https://swapi.dev/api/people/${id}/`;

    try {
        const resposta = await fetch(url);
        
        // Verifica se a resposta é bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Personagem com ID ${id} não encontrado.`);
        }

        const personagem = await resposta.json();
        console.log(`Nome do personagem: ${personagem.name}`);
    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro.message);
    }
}

buscarPersonagem();
