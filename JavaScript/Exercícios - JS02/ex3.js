/*
    Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
Em caso de ter ganhado, mostra o premio, se não ganhou, mostra outra mensagem.
*/


const numberRandom = Math.floor(Math.random() * (10 - 1) + 1)
const numberVictory = Math.floor(Math.random() * (10 - 1) + 1)

if (numberRandom === numberVictory) {
    console.log("Parabens voce é o ganhador")
} else {
    console.log("Infelizmente não foi dessa vez")
}
console.log(numberRandom)