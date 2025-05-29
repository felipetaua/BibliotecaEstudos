/*
    Escreva um programa onde, você chame uma função mandando 2 argumentos, e a função RETORNA o maior e você mostra-lo na tela, fora da função
*/

const numberTest1 = 2
const numberTest2 = 5


const numberIsBigger = (number1, number2) => {
    if (number1 > number2) {
        result = `O número ${number1} é maior que ${number2}`
    } else if (number1 < number2) {
        result = `O número ${number2} é maior que ${number1}`
    } else {
        result = `Os número ${number1} é igual a ${number2}`
    }
    return result
}

numberIsBigger(numberTest1, numberTest2);

const resultado = numberIsBigger(numberTest1, numberTest2)

console.log(`${resultado}`)