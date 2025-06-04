/*
    For each

    é uma função e serve para percorrer array
*/

const students = [ 
    { name: "Rodolfo", age: 25 },
    { name: "Eduardo", age: 23 },
    { name: "Bruna", age: 52 },
    { name: "Pedro", age: 22 },
    { name: "Carla", age: 61 },
    { name: "Maria", age: 35 },
    { name: "Julio", age: 45 },
]

let allStudentsAge = 0

students.forEach( (students, index) => {
    allStudentsAge += students.age
})

const averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é: ${averageAge.toFixed(0)}`)


students.forEach( (students, index) => {
    console.log(`O aluno chama-se ${students.name}, tem ${students.age} anos e está na posisão ${index} do meu array`)
})