/*
    Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
*/


const numberRandom = Math.floor(Math.random() * (10 - 0 + 1) + 0)
const numberVictory = Math.floor(Math.random() * (10 - 0 + 1) + 0)

if (numberRandom === numberVictory) {
    console.log("Parabens voce é o ganhador")
} else {
    console.log("Infelizmente não foi dessa vez")
}
console.log(numberRandom)