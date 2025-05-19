/* OPERADORES DE ATRIBUIÇÃO EM JAVASCRIPT

=    -> Atribuição simples (define um valor inicial à variável)
+=   -> Soma e atribui (adição com atualização do valor)
-=   -> Subtrai e atribui
*=   -> Multiplica e atribui
/=   -> Divide e atribui
%=   -> Resto e atribui

Esses operadores são utilizados para modificar o valor de uma variável existente com base nela mesma.
*/

let numero = 10;

console.log("Valor inicial:", numero);

// Atribuição direta (=)
numero = 5;
console.log("Atribuição (=):", numero); // 5

// Adição e atribuição (+=)
numero += 3; // equivalente a: numero = numero + 3
console.log("Adição (+=):", numero); // 8

// Subtração e atribuição (-=)
numero -= 2; // equivalente a: numero = numero - 2
console.log("Subtração (-=):", numero); // 6

// Multiplicação e atribuição (*=)
numero *= 4; // equivalente a: numero = numero * 4
console.log("Multiplicação (*=):", numero); // 24

// Divisão e atribuição (/=)
numero /= 6; // equivalente a: numero = numero / 6
console.log("Divisão (/=):", numero); // 4

// Resto e atribuição (%=)
numero %= 3; // equivalente a: numero = numero % 3
console.log("Resto (%=):", numero); // 1

/*
DICA:
Esses operadores são extremamente úteis em laços (loops) e contadores, como quando você quer somar valores progressivamente ou aplicar descontos, por exemplo.
*/

// Exemplo prático: somando valores a um saldo
let saldo = 100;
let compra = 35;

// Subtraindo compra do saldo com -=
saldo -= compra;
console.log("Saldo após compra:", saldo); // 65

// Recebendo um valor com +=
saldo += 20;
console.log("Saldo após receber:", saldo); // 85
