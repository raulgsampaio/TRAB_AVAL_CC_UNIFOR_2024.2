const DESCONTO_FIXO = 0.15;

function calcularDesconto(preco) {
    return preco - (preco * DESCONTO_FIXO);
}

const precoOriginal = 100;
const precoComDesconto = calcularDesconto(precoOriginal);
console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
