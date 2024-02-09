const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};

const aula1 = {
  Identificador: 1,
  nome_da_aula: "Introdução a programação",
};

const aula2 = {
  identificador: 2,
  nome_da_aula: "Variáveis",
};

const aula3 = {
  identificador: 3,
  nome_da_aula: "Condicionais",
};

const aula4 = {
  identificador: 4,
  nome_da_aula: "Arrays",
};

curso.aulas.push(aula1, aula2, aula3, aula4)

console.log(curso);