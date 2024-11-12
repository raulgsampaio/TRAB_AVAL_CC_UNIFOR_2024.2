function verificarSePodeDirigir(idade) {
    return idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';
}

console.log(verificarSePodeDirigir(16)); 
console.log(verificarSePodeDirigir(20)); 
