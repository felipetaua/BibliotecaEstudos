// Crie um programa que gere uma senha aleatória de 8 caracteres (com letras e números).

const letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","k","y","z"] 

// gerando os número aleatórios
let numbersRandom = Math.random().toFixed(4) * 10000 

// gerando letras aleatórias
indexLetter1 = Math.floor(Math.random() * letter.length)
indexLetter2 = Math.floor(Math.random() * letter.length)
indexLetter3 = Math.floor(Math.random() * letter.length)
indexLetter4 = Math.floor(Math.random() * letter.length)

letrasPassword = `${letter[indexLetter1]}${letter[indexLetter2]}${letter[indexLetter3]}${letter[indexLetter4]}`

// juntando as letras com os números
let senha = `${numbersRandom}${letrasPassword}`

console.log(`Sua senha é: ${senha}`)