async function buscarVeiculos() {
    try {
        const resposta = await fetch('https://swapi.dev/api/vehicles/');
        if (!resposta.ok) throw new Error('Erro ao buscar veículos');
        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao buscar veículos:', erro.message);
        return null;
    }
}

function filtrarVeiculosCaros(veiculos) {
    return veiculos.filter(veiculo => {
        const custo = parseInt(veiculo.cost_in_credits);
        return !isNaN(custo) && custo > 10000;
    });
}

function calcularCustoTotal(veiculos) {
    return veiculos.reduce((total, veiculo) => {
        const custo = parseInt(veiculo.cost_in_credits);
        return total + (isNaN(custo) ? 0 : custo);
    }, 0);
}

function exibirVeiculosCaros(veiculos) {
    console.log("Veículos caros (mais de 10.000 créditos):");
    veiculos.forEach(veiculo => {
        console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
    });
}

async function buscarVeiculosECalcularCusto() {
    const dados = await buscarVeiculos();

    if (dados) {
        const veiculosCaros = filtrarVeiculosCaros(dados.results);
        exibirVeiculosCaros(veiculosCaros);

        const custoTotal = calcularCustoTotal(veiculosCaros);
        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);
    }
}

// Executar a função
buscarVeiculosECalcularCusto();
