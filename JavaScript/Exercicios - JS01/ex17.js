/*
    DESAFIO - JAVASCRIPT BÁSICO

    Neste exercício, vamos reunir diversos conceitos fundamentais aprendidos até aqui,
    com o objetivo de simular o cadastro e a análise de alunos em um sistema simples.

    - Criará um array chamado 'students' contendo objetos com dados de alunos.
    - Cada aluno terá: nome, idade, duas notas e um endereço (como objeto aninhado).
    - O programa calculará a média das notas de cada aluno.
    - Exibirá uma mensagem com nome, média e endereço formatado.
    - Informará se o aluno foi aprovado (média >= 6) ou reprovado (média < 6).
    - Listará apenas os alunos aprovados ao final.

    Dica: pense no programa como uma conversa entre você e o computador.
    Sua lógica deve explicar passo a passo o que precisa ser feito.
*/

const students = [
    {
        name: "João",
        age: 17,
        grade: [7.5, 8.0],
        adress: {
            street: "St. Abapach Rodrigues",
            number: 34,
            country: "Brasil"
        },
    },
    {
        name: "Maria",
        age: 17,
        grade: [0, 9.5 ],
        adress: {
            street: "St. Onestey Guest",
            number: 68,
            country: "Brasil"
        },
    },
]

//pegando a nota dos dois alunos separadamente
let notaJoao1 = students[0].grade[0]
let notaJoao2 = students[0].grade[1]

let notaMaria1 = students[1].grade[0]
let notaMaria2 = students[1].grade[1]


// Calculando a media dos alunos 
mediaAluno1 = (notaJoao1 + notaJoao2) / students[0].grade.length
mediaAluno2 = (notaMaria1 + notaMaria2) / students[1].grade.length


// verificando se o aluno foi aprovado
let situacao1
let situacao2

if (mediaAluno1 >= 6) {
    situacao1 = "Aprovado";
} if (mediaAluno1 < 6) {
    situacao1 = "Reprovado";
}

if (mediaAluno2 >= 6) {
    situacao2 = "Aprovado";
} if (mediaAluno2 < 6) {
    situacao2 = "Reprovado";
} 

// Mostrando as informações
console.log("Lista de Alunos")
console.log(`Aluno: ${students[0].name}, Média: ${mediaAluno1} Idade: ${students[0].age}`)
console.log(`Aluno: ${students[1].name}, Média: ${mediaAluno2} Idade: ${students[1].age}`)
console.log("-------------------------")

// Mostrando a lista de aprovados
console.log("Lista de Aprovados")
console.log(`Aluno: ${students[0].name}, Média: ${mediaAluno1}, Situação do aluno: ${situacao1}`)
console.log(`Aluno: ${students[1].name}, Média: ${mediaAluno2}, Situação do aluno: ${situacao2}`)
console.log("-------------------------")


