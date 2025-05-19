/*
    Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"]
João e João, imprime true. João e Maria, imprime false.
*/


const object1 = [
    {
        name: "João"
    }
]

const object2 = [
    {
        name: "Maria"
    }
]

console.log(`João e João, imprime ${object1[0].name === object1[0].name}. João e Maria, imprime ${object1[0].name === object2[0].name}`)