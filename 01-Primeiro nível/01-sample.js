function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

const numerosEntrada = [1, 2, 3, 4, 5, 6];
const numerosPares = filtrarNumerosPares(numerosEntrada);
console.log(numerosPares);