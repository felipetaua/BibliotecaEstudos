const list1 = [ 
    { name: "Rodolfo", vip: true},
    { name: "Eduardo", vip: false},
    { name: "Bruna", vip: true},
    { name: "Pedro", vip: true},
    { name: "Carla", vip: false},
    { name: "Maria", vip: true},
    { name: "Julio", vip: false},
]

// const list = [ 
//     { name: "Rodolfo", vip: true, sector: "Black"},
//     { name: "Eduardo", vip: false, sector: "Green"},
//     { name: "Bruna", vip: true, sector: "Black"},
//     { name: "Pedro", vip: true, sector: "Black"},
//     { name: "Carla", vip: false, sector: "Green"},
//     { name: "Maria", vip: true, sector: "Black"},
//     { name: "Julio", vip: false, sector: "Green"},
// ]

const newList = list1.map( client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }

    return newList 
})

console.log(newList)



const students = [ 
    { name: "Rodolfo", testGrade: 6 },
    { name: "Eduardo", testGrade: 3 },
    { name: "Bruna", testGrade: 8 },
    { name: "Pedro", testGrade: 6 },
    { name: "Carla", testGrade: 9 },
    { name: "Maria", testGrade: 6 },
    { name: "Julio", testGrade: 5 },
]

const approvedStudents = students.map( student => {
    let approvedOrNot
    if(student.testGrade >= 6) {
        approvedOrNot = 'approved'
    } else {
        approvedOrNot = 'disapproved'
    }

    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }

    return students
})

console.log(approvedStudents)