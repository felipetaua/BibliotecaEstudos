/*
    Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
*/

let numberTest1 = 19
let numberTest2 = 20

numberIsBigger = (number1, number2) => {
    if (number1 > number2) {
        console.log(`O número ${number1} é maior que ${number2}`)
    } else if (number1 < number2) {
        console.log(`O número ${number2} é maior que ${number1}`)
    } else {
        console.log(`Os número ${number1} é igual ao ${number2}`)
    }
}

numberIsBigger(numberTest1, numberTest2)

