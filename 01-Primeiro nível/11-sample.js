class Usuario {
    constructor(nome, idade, role, dataCriacao, ultimoLogin, ativo, tentativasLogin, prioridade) {
        this.nome = nome;
        this.idade = idade;
        this.role = role;
        this.dataCriacao = dataCriacao;
        this.ultimoLogin = ultimoLogin;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.prioridade = prioridade;
    }

    verificarStatus() {
        console.log(this.ativo ? "Ativo" : "Inativo");
    }

    verificarPermissao() {
        console.log(this.role === 'admin' ? "Admin pode acessar todas as áreas." : "Convidado tem acesso limitado.");
    }
}

// Função para contar usuários com a role de 'admin'
function contarAdmins(usuarios) {
    return usuarios.filter(usuario => usuario.role === 'admin').length;
}

// Função para verificar se o número de tentativas de login é excessivo
function verificarTentativasExcessivas(usuario, limite) {
    console.log(usuario.tentativasLogin > limite ? "Tentativas de login excessivas." : "Tentativas de login sob controle.");
}

// Função para verificar qual usuário logou mais recentemente
function usuarioMaisRecente(u1, u2) {
    return u1.ultimoLogin > u2.ultimoLogin 
        ? `${u1.nome} logou mais recentemente.` 
        : `${u2.nome} logou mais recentemente.`;
}

// Função para verificar se o usuário foi criado recentemente (menos de um ano)
function usuarioCriadoRecentemente(usuario) {
    const umAnoEmMilissegundos = 31536000000; // 1 ano em milissegundos
    const agora = new Date();
    console.log(agora - usuario.dataCriacao < umAnoEmMilissegundos 
        ? "Usuário criado recentemente." 
        : "Usuário antigo.");
}

// Lista de usuários
const usuarios = [
    new Usuario("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, 'guest', new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, 'admin', new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, 'guest', new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

// Contar usuários administradores
console.log(`Usuários admin: ${contarAdmins(usuarios)}`);

// Verificar status e permissões de usuários
usuarios[0].verificarStatus();
usuarios[1].verificarPermissao();

// Verificar tentativas de login
verificarTentativasExcessivas(usuarios[2], 4);

// Verificar qual usuário logou mais recentemente
console.log(usuarioMaisRecente(usuarios[0], usuarios[3]));

// Verificar se o usuário foi criado recentemente
usuarioCriadoRecentemente(usuarios[3]);
