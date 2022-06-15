const alunos = [
  {
    nome: "Giselle",
    nota: 4,
  },
  {
    nome: "Tiago",
    nota: 2,
  },
  {
    nome: "Marcos",
    nota: 10,
  },
  {
    nome: "Yago",
    nota: 9,
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (arr[i].nota >= media) {
         aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 7));
