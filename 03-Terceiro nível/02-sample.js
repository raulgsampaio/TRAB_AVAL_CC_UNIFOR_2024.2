async function buscarDados(url) {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error('Erro ao buscar dados');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro.message);
        return null;
    }
}

function filtrarPessoasPorLetra(pessoas, letra) {
    return pessoas.filter(pessoa => pessoa.name.startsWith(letra));
}

function exibirPessoas(pessoas) {
    if (pessoas.length === 0) {
        console.log('Nenhuma pessoa encontrada com a letra especificada.');
    } else {
        console.log('Pessoas cujo nome começa com a letra L:');
        pessoas.forEach(pessoa => console.log(pessoa.name));
    }
}

async function buscarEFiltrarPessoas() {
    const url = 'https://swapi.dev/api/people/';
    const dados = await buscarDados(url);

    if (dados) {
        const pessoasComL = filtrarPessoasPorLetra(dados.results, 'L');
        exibirPessoas(pessoasComL);
        console.log(`Total de pessoas encontradas: ${dados.results.length}`);
    }
}

buscarEFiltrarPessoas();
