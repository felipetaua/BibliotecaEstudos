/*
    FILTER
    - Cria um novo array, a partir do array oercorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/


const list1 = [ 
    { name: "Rodolfo", vip: true},
    { name: "Eduardo", vip: false},
    { name: "Bruna", vip: true},
    { name: "Pedro", vip: true},
    { name: "Carla", vip: false},
    { name: "Maria", vip: true},
    { name: "Julio", vip: false},
]


// Só filtra se a informação ser true

const justVips = list1.filter( client => {
    return client.vip 
    // ele vai ver quais informações são true e vai criar um novo array
})

console.log(justVips)


const students = [ 
    { name: "Rodolfo", testGrade: 6 },
    { name: "Eduardo", testGrade: 3 },
    { name: "Bruna", testGrade: 8 },
    { name: "Pedro", testGrade: 6 },
    { name: "Carla", testGrade: 9 },
    { name: "Maria", testGrade: 6 },
    { name: "Julio", testGrade: 5 },
]

const newStudentsList = students.filter( student => {
    return student.testGrade > 6
})

console.log(newStudentsList)
