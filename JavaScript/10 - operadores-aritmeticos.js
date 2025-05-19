/* OPERADORES ARITMÉTICOS EM JAVASCRIPT

+   -> Adição
-   -> Subtração
*   -> Multiplicação
/   -> Divisão
%   -> Resto da divisão (módulo)
++  -> Incremento
--  -> Decremento
**  -> Exponencial (potência)

Esses operadores são usados para realizar operações matemáticas básicas e avançadas.
*/

// Exemplos com valores diretos
const soma = 20 + 21;               // 41
const subtracao = 15 - 20;          // -5
const multiplicacao = 2 * 12;       // 24
const divisao = 20 / 5;             // 4
const resto = 7 % 3;                // 1 (7 dividido por 3 dá 2, sobra 1)

console.log("Adição: ", soma);
console.log("Subtração: ", subtracao);
console.log("Multiplicação: ", multiplicacao);
console.log("Divisão: ", divisao);
console.log("Resto da divisão: ", resto);

/* 
INCREMENTO E DECREMENTO

O operador ++ soma 1 ao valor atual.
O operador -- subtrai 1 do valor atual.
Há duas formas de usá-los: pós-fixado (x++) e pré-fixado (++x).
*/

let myNumber = 10;

// Incrementando passo a passo
myNumber++;
myNumber++;
myNumber++;
myNumber++;

console.log("Incremento (++):", myNumber); // Deve mostrar 14

// Decrementando
myNumber--;
myNumber--;
myNumber--;
myNumber--;

console.log("Decremento (--):", myNumber); // Volta a 10

/*
DIFERENÇA ENTRE PÓS-INCREMENTO E PRÉ-INCREMENTO
*/

let numeroTeste = 10;

console.log("Pós-incremento (numeroTeste++):", numeroTeste++); 
// Primeiro imprime o valor original (10), depois incrementa para 11

console.log("Após pós-incremento:", numeroTeste); // Agora é 11

console.log("Pré-incremento (++numeroTeste):", ++numeroTeste); 
// Primeiro incrementa para 12, depois imprime

// Funciona igual para o decremento
console.log("Pós-decremento (numeroTeste--):", numeroTeste--); 
// Imprime 12, depois decrementa para 11

console.log("Pré-decremento (--numeroTeste):", --numeroTeste); 
// Decrementa para 10, depois imprime

/*
EXPONENCIAL (**)
Calcula a potência de um número. Por exemplo:
2 ** 3 = 2 * 2 * 2 = 8
*/

console.log("Exponencial (2 ** 3):", 2 ** 3); // 8

// Mais exemplos
console.log("3 ** 4 =", 3 ** 4);     // 81
console.log("10 ** 2 =", 10 ** 2);   // 100
console.log("5 ** 0 =", 5 ** 0);     // 1 (qualquer número elevado a zero é 1)

/*
DICA:
Use esses operadores com variáveis para manipular contadores, loops, pontuação de jogos e outras situações do mundo real.

Essa estrutura permite revisar com clareza e compreender não apenas o *resultado*, mas também a *lógica por trás*.
*/

