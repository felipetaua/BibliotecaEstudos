// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numberOne = 30
const numberTwo = 10
const numberThree = 40 

const numbers = [12, 29, 8]

const maxNumber = Math.max(...numbers)
const minNumber = Math.min(...numbers)

console.log(`O maior número é ${maxNumber} e o menor número é ${minNumber}`)



// OUTRA FORMA DE RESOLUÇÃO

if(numberOne < numberTwo && numberOne < numberThree) {
    console.log("O primeiro número é o menor")
} else if(numberTwo < numberThree) {
    console.log("O segundo é o menor")
} else {
    console.log("O terceiro é o menor")
}