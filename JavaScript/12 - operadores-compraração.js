/* 
OPERADORES DE COMPARAÇÃO EM JAVASCRIPT

==   -> Igual (compara apenas o valor, **não** o tipo)
===  -> Estritamente igual (compara valor **e tipo**)

!=   -> Diferente (compara apenas o valor, **não** o tipo)
!==  -> Estritamente diferente (compara valor **e tipo**)

>    -> Maior que
<    -> Menor que
>=   -> Maior ou igual
<=   -> Menor ou igual

RECOMENDAÇÃO: SEMPRE USE === e !==
Evite == e != para evitar bugs com coerção implícita de tipos.
*/

// EXEMPLO 1: COMPARAÇÃO DE STRINGS

const firstPerson = 'João';
const secondPerson = 'Maria';

console.log("João é igual a Maria (==)?", firstPerson == secondPerson);   // false
console.log("João é igual a Maria (===)?", firstPerson === secondPerson); // false

// EXEMPLO 2: COMPARAÇÃO DE NÚMEROS COM STRINGS

const firstNumber = "23";  // string
const secondNumber = 23;   // number

console.log("Comparação com == :", firstNumber == secondNumber);   // true 😬 (porque converte tipos!)
console.log("Comparação com ===:", firstNumber === secondNumber); // false ✅ (sem conversão de tipo)

// O mesmo vale para comparação negativa:

console.log("Comparação com != :", firstNumber != secondNumber);   // false 😬 (são considerados iguais)
console.log("Comparação com !==:", firstNumber !== secondNumber); // true ✅ (tipos diferentes)

// Comparações numéricas
console.log("23 > 10:", secondNumber > 10);   // true
console.log("23 < 10:", secondNumber < 10);   // false
console.log("23 >= 23:", secondNumber >= 23); // true
console.log("23 <= 22:", secondNumber <= 22); // false
