/*Escreva um programa onde, você chame uma função enviando um número,
a função deve imprime na tela os número de 1 até o número que você enviou.
*/

function otherNumbers(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`Número: ${i}`)
    }
}

otherNumbers(55)