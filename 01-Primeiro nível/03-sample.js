function calcularDiferencaDias(dataInicio, dataFim) {
    const milissegundosPorDia = 24 * 60 * 60 * 1000; // Total de milissegundos em um dia
    const diferencaEmMilissegundos = new Date(dataFim) - new Date(dataInicio);
    return diferencaEmMilissegundos / milissegundosPorDia;
}

const dataInicio = "2024-01-01";
const dataFim = "2024-12-31";
const diferencaEmDias = calcularDiferencaDias(dataInicio, dataFim);

console.log(`A diferença é de ${diferencaEmDias} dias.`);