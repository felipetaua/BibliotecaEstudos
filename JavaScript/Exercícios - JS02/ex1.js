/* Faça um programa que compare o um número com 10 e
imprime na tela "o número é maior, o número é menor, o número é igual" */

const numberFix = 10
const numberUser = 6

if ( numberUser > numberFix) {
    console.log("O Número do usuário é maior que 10")
} else if ( numberUser < numberFix) {
    console.log("O Número do usuário é menor que 10")
} else if (numberUser === numberFix) {
    console.log("Os números são iguais")
}