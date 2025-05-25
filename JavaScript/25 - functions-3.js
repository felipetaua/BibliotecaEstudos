/*
    FUNCTIONS

        return
*/

function sum(number1, number2) {  // Se não possui return ela é VOID = vazio
    const result = number1 * number2
    return result
}

const firstNumber = 10
const seccondNumber = 20

const result = sum(firstNumber, seccondNumber)

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O Segundo número é ${seccondNumber}`)
console.log(`E a soma dos dois é ${sum(firstNumber, seccondNumber)}`) // undefined se não tiver return na function
console.log(`E a soma dos dois é ${result}`) // outra forma, armazenando em uma variável 
