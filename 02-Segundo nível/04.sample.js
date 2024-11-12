function tentarLogin(senha) {
    const senhaCorreta = '12345';
    const maxTentativas = 3;

    for (let tentativas = 1; tentativas <= maxTentativas; tentativas++) {
        if (senha === senhaCorreta) {
            return 'Login efetuado com sucesso!';
        }
        if (tentativas < maxTentativas) {
            console.log(`Senha incorreta. Tentativa ${tentativas} de ${maxTentativas}.`);
        }
    }
    return 'Tentativas de login excedidas.';
}

// Testando a função
console.log(tentarLogin('123'));  // Tentativa 1 falha
console.log(tentarLogin('12345')); // Tentativa bem-sucedida

