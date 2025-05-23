/* Faça um programa onde leia um número e diga se ele é:
    - impar,
    - par,
    - é um número primo e impar,
    - é par e divisivel por 5.
*/

const number = 3

if(number % 2 === 0) {
    console.log("O número é PAR")
    if(number % 5 === 0 || 5) {
        console.log("É PAR e Divisível por 5")
    } 
} else if (number % 2 === 1) {
    console.log("O número é ÍMPAR")
    if(number <= 1) {
        return console.log("Não é primo")
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return console.log("Não é primo")
    }
    return console.log("O número é PRIMO e ÍMPAR")
}