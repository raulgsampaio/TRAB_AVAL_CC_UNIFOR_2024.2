const MULTIPLICADOR = 3;

function obterUsuario(id) {
    const usuarios = {
        42: { id: 42, nome: "João Silva", idade: 25, ativo: 1 },
        43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 }
    };
    return usuarios[id] || null;
}

function atualizarDados(usuario) {
    if (usuario && usuario.idade > 18) {
        console.log(`Atualizando usuário: ${usuario.id}`);
        usuario.idade += 1;
        console.log(`Nova idade do usuário: ${usuario.idade}`);
        salvarDados();
    }
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function calcularTotal(itens, multiplicador) {
    return itens.reduce((total, item) => total + item * multiplicador, 0);
}

function exibirDadosArray(dados) {
    dados.forEach(dado => console.log("Dados:", dado));
}

function calcular(a, b, c) {
    const operacoes = {
        1: () => b + c,
        2: () => b * c,
        3: () => b - c,
        default: () => b / c
    };
    const resultado = (operacoes[a] || operacoes.default)();
    const stringInvertida = resultado.toString().split('').reverse().join('');
    console.log("String invertida:", stringInvertida);
    return stringInvertida;
}

function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        resultado += i % 2 === 0 ? i : -i;
    }
    console.log("Resultado do processamento:", resultado);
    exibirDadosArray(["Valor 1", "Valor 2", "Valor 3"]);
    return resultado;
}

function calcularItens() {
    const itens = [5, 7, 9, 11];
    const total = calcularTotal(itens, MULTIPLICADOR);
    console.log("Cálculo total:", total);
    exibirDadosArray(["Dado 1", "Dado 2", "Dado 3"]);
    return total;
}

function principal() {
    const itens = [10, 20, 30, 40, 50];
    const total = calcularTotal(itens, MULTIPLICADOR);
    const usuario = obterUsuario(42);

    if (usuario?.ativo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

// Chamadas principais
principal();
console.log("Resultado do cálculo:", calcular(1, 2, 3));
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", calcularItens());
