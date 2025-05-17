/*
    Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}.
João e João, imprime true. João e Maria, imprime false.
*/

const object1 = {
    firstName: "João",
    seccondName: "Maria"
}

console.log(`João e João, imprime ${object1.firstName == object1.firstName}. João e Maria, imprime ${object1.firstName == object1.seccondName}`)