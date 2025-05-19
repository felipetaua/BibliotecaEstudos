/* OPERADORES aritmétricos

+   -> Adição
-   -> Subtração
*   -> Multiplicação
/   -> Divisão
%   -> Resto
++  -> Incremento
--  -> Decremento
**  -> Exponencial

*/

const soma = 20 + 21
const subtracao = 15 - 20
const mulplicacao = 2 * 12
const divisao = 20 / 5
const resto = 7 % 3

console.log("operaçãoes: ", resto)

//Incremento

let myNumberIncremento = 10
myNumberIncremento++
myNumberIncremento++
myNumberIncremento++
myNumberIncremento++ 

console.log("Incremento: ", myNumberIncremento) // a cada myNumberIncremento++ ele soma +1

//Decremento

let myNumberDecremento = 10
myNumberIncremento--
myNumberIncremento--
myNumberIncremento--
myNumberIncremento--  

console.log("Decremento: ", myNumberIncremento)

// Experiência

let NumberTeste = 10

console.log(NumberTeste++) //Porque não o resultado não é 11?

/* Explicação porque o JavaScript primeiro exibe o numero na tela e depois não tem como fazer a operação

Mas se eu quiser que apareça 11 no resultado é só alternar a ordem
Ex: ++NumberTeste

*/
console.log(++NumberTeste)

// O mesmo conceito se aplica para o decremento

console.log(NumberTeste--)
console.log(--NumberTeste)

// Exponencial

console.log(2 ** 3)
