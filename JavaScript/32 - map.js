/*
    MAP 

    - Cria um novo array, a partir do array percorrido(array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const numbers = [1, 2, 3, 4, 5]
const students = [ 
    { name: "Rodolfo", age: 25 },
    { name: "Eduardo", age: 23 },
    { name: "Bruna", age: 52 },
    { name: "Pedro", age: 22 },
    { name: "Carla", age: 61 },
    { name: "Maria", age: 35 },
    { name: "Julio", age: 45 },
]

// const newArray = numbers.map( (number) => {
//     return number
// })


const newStudents = students.map( (student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 7
    }
    return newStudent
})

console.log(students)
console.log(newStudents)