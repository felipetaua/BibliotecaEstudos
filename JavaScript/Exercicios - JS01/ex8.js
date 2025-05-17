/*
    Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"].
João e João, imprime false. João e Maria, imprime true.
*/

const array = ["João", "Maria"]

console.log(`João e João, imprime ${array[0] != array[0]}, e João e Maria, imprime ${array[0] != array[1]}`)