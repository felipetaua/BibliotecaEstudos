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



const newStudents = students.map( (student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 7
    }
    return newStudent
})

console.log(students)
console.log(newStudents)


// formas de escrever da mesma forma de estrutura

const newArray0 = numbers.map( function(number) {
    return number * 2
})

const newArray1 = numbers.map( (number) => {
    return number * 2
})

const newArray3 = numbers.map( number => number * 2)


// tratar a informação em camadas
const double = number => number * 2
const toReais = number => `R$${number.toFixed(2)}`

// voce consegue aninhar vários maps e trabalhar em camadas(primeiro posso multiplicar e depois converter para reais)
const newArray = numbers.map(double).map(toReais)

console.log(newArray)