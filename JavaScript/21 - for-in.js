/*
    ESTRUTURAS DE REPETIÇÃO - FOR IN
*/

const student = {
    name: "Caio",
    age: 15,
    genere: "Male"
}


// console.log(student["name"])
// console.log(student.name)

for(let property in student) {
    console.log(` ${property}: ${student[property]}`)
}