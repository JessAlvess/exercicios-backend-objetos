const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}

usuario.seApresente = function () {
    console.log(`Olá... Eu sou ${this.nome} e tenho ${this.idade} anos de idade. Sou ${this.profissao} e minha cor preferida é ${this.cor_preferida}!`);
}

console.log(usuario.seApresente());