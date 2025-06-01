// 1️⃣ GERADOR DE NÚMERO ALEATÓRIO
//     - Sorteie um número inteiro de 1 a 100.
//     - Peça para o usuário tentar adivinhar e informe se ele acertou.

const numberRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1)
const numberUser = 50

if (numberUser === numberRandom) {
    console.log("Parabéns você acertou!")
} else {
    console.log("Infelizmente esse não é o numero")
}

console.log(numberUser,numberRandom)