// Faça um programa que verifica se uma pessoa é brasileira ou nao

const person = [{
    name: "Tauã",
    nationality: "Brasileira"
},
{
    name: "Rodolfo",
    nationality: "Europeu"
}
]

if (person[0].nationality === "Brasileira") {
    console.log("A pessoa é brasileira")
} else if (person[0].nationality !== "Brasileira") {
    console.log("A pessoa não é brasileira")
}
