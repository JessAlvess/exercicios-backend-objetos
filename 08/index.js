const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

let menssagemSemPet = (nome) => `Sou ${nome} e não tenho pets`
let menssagemComVariosPet = (nome, quantidade) => `Sou ${nome} e tenho ${quantidade} pets`
let menssagemComUmPet = (nome, nomePet) => `Sou ${nome} e tenho 1 pet que se chama ${nomePet}`



for (const pessoa of usuarios) {
    let {nome , pets} = pessoa
    if (pets.length > 1) {
        console.log(menssagemComVariosPet(nome, pets.length));
    } else if (pets.length === 1) {
        console.log(menssagemComUmPet(nome, pets[0]));
    } else {
        console.log(menssagemSemPet(nome));
    }
}
