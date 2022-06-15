function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Giselle",
  idade: 45,
};
const pessoa2 = {
  nome: "Tiago",
  idade: 39,
};
const pessoa3 = {
  nome: "Marcos",
  idade: 15,
};
const pessoa4 = {
  nome: "Yago",
  idade: 24,
};
const animal = {
  nome: "Floquinho",
  idade: 3,
  raca: "pug",
};
// utilizando - this-call
console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.call(pessoa3, 10));
console.log(calculaIdade.call(pessoa4, 10));
// utilizando - this-apply
console.log(calculaIdade.apply(pessoa1, [10]));
console.log(calculaIdade.apply(pessoa2, [10]));
console.log(calculaIdade.apply(pessoa3, [10]));
console.log(calculaIdade.apply(pessoa4, [10]));
