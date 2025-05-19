/* OPERADORES DE COMPARAÇÃO

==  -> Igual // Ele compara o valor, mas não compara o tipo do valor //nunca use esse aquif
=== -> TOTALMENTE Igual // Ele verifica o tipo de dado!

!=  -> Diferente // Ele compara o valor, mas não compara o tipo do valor //nunca use esse aqui
!== -> TOTALMENTE Diferente  // Ele verifica o tipo do dado!

*/

// Igual

const firstPerson = 'João'
const seccondPerson = 'Maria'

const firstNumber = "23"
const seccondNumber = 23

console.log(firstPerson == seccondPerson)

console.log(firstNumber == seccondNumber)
console.log(firstNumber === seccondNumber)


// Diferente

console.log(firstNumber !== seccondNumber)