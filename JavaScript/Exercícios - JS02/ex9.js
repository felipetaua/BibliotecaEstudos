/* Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES
- default

*/

const numbers = [1, 1, 1, 1]

let PrimeNumbers = true
let OddNumbers = true

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        PrimeNumbers = false
    } 
    if(numbers[i] % 2 !== 1) {
        OddNumbers = false
    }
}

let result;

if(PrimeNumbers) {
    result = "IMPARES"
} else if (OddNumbers) {
    result = "PARES"
} else {
    result = "MISTO"
}

switch (result) {
    case "PARES":
        console.log("TODOS OS NÚMEROS SÃO IMPARES")
    break;

    case "IMPARES":
        console.log("TODOS OS NÚMEROS SÃO PARES")
    break;

    default:
        console.log("POSSUI NÚMEROS MISTOS")
    break;
}

// OUTRA FORMA DE FAZER - RESOLUÇÃO

const numberOne = 34
const numberTwo = 20
const numberThree = 32
const numberFour = 4

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0) {
    console.log("Todos são pares")
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) {
    console.log("Todos são impares")
} else {
    console.log("Tudo misturado")
}