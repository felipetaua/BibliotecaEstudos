// Crie um programa onde o usuário tenta adivinhar um número aleatório entre 1 e 5. Se acertar, imprime "Parabéns!".
let numeroDigitado = 3
let numberRandom = Math.floor(Math.random() * 5)


if(numberRandom == numeroDigitado) {
    console.log("Parabéns!")
} else if (numberRandom != numeroDigitado) {
    console.log("Não foi dessa vez!")
}
