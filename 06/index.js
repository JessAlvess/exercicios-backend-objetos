const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

for (const pessoa of usuarios) {
    let test = pessoa.idade > 17 ? adultos.push(pessoa) : jovens.push(pessoa)
}

console.log(jovens);
console.log(adultos);

