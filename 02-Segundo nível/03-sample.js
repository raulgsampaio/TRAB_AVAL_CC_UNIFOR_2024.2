const CUSTO_POR_KM = 10;

function calcularFrete(distancia) {
    return distancia * CUSTO_POR_KM;
}

const distancia = 50;
const frete = calcularFrete(distancia);
console.log(`O valor do frete é: R$ ${frete.toFixed(2)}`);
