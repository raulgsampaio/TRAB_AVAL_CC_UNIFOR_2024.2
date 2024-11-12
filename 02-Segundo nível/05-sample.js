// Constantes para bônus e descontos
const BONUS_GERENTE = 1000;
const BONUS_SUPERVISOR = 500;
const BONUS_OUTROS = 200;
const DESCONTO_FIXO = 300;

function calcularBonus(cargo) {
    switch (cargo) {
        case 'gerente':
            return BONUS_GERENTE;
        case 'supervisor':
            return BONUS_SUPERVISOR;
        default:
            return BONUS_OUTROS;
    }
}

function calcularImposto(salario) {
    if (salario > 5000) {
        return salario * 0.27;
    } else if (salario > 3000) {
        return salario * 0.18;
    } else {
        return salario * 0.11;
    }
}

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    const bonus = calcularBonus(cargo);
    const salarioComBonus = salarioBase + bonus;
    const salarioComDesconto = salarioComBonus - DESCONTO_FIXO;
    const imposto = calcularImposto(salarioComDesconto);
    
    const salarioFinal = salarioComDesconto - imposto;
    return salarioFinal.toFixed(2); // Retorna com 2 casas decimais
}

// Exemplo de uso
const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: R$ ${salario}`);
