// Crie um programa que gere dois números aleatórios entre 1 e 10 e diga qual é o maior.

let numberRandon1 = Math.random().toFixed(1) * 10
let numberRandon2 = Math.random().toFixed(1) * 10

if (numberRandon1 > numberRandon2) {
    console.log(`O número ${numberRandon1} é maior que o número ${numberRandon2}`)
} else if (numberRandon1 < numberRandon2) {
    console.log(`O número ${numberRandon2} é maior que o número ${numberRandon1}`)
} else {
    console.log(`O número ${numberRandon1} é igual ao número ${numberRandon2}`)
}