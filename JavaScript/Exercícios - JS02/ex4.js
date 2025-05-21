// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numberOne = 23
const numberTwo = 10
const numberThree = 12

const numbers = [12, 29, 8]

const maxNumber = Math.max(...numbers)
const minNumber = Math.min(...numbers)

console.log(`O maior número é ${maxNumber} e o menor número é ${minNumber}`)