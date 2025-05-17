/*
    STRING

    - Cadeia de Caracteres

*/

// Formas de utilizar strings
let myFirstString = "E aqui dentro posso escrever o que eu quiser!"
let mySeccondString = 'Agora com aspas simples'
let mythirdString = `Com a crase eu também consigo` // template literals ou template string

// se o seu texto precisar utilizar aspas duplas ou aspas simples é possivel alternar entre a versão com aspas duplas ou aspas simples para não ter erro np código
let text = 'Fulano de Tal falou o seguinte: "eu aprendi js"'


let numberOfPeopleInClass = 34
// a crase tem a funcionalidade de conseguir colocar variaveis direto no comentário e voce consegue dar enter e utilizar em mais linhas
let myTextWithSuperPowers = `
    Tinham exatamente ${numberOfPeopleInClass} pessoas na aula, e fizeram uma conta que o resultado foi ${10 + 45}
`

console.log(myTextWithSuperPowers)



/* NUMBERS */

const number1 = 234/2  //number
const numberTwo = "234/2" // string

console.log(number1)
console.log(numberTwo) 

const numberOne = 234.0 // numero com virgula tambem funciona
const myString = "abc"
const result = numberOne / myString // ao dividir vai dar NaN - Not a Number

console.log(result)



/*
    OBJETOS

    propriedades : valor
    marca: Sansung
    cor: preta
    tamanho: 75`

    nome: Rodolfo
    idade: 28
    altura: 1.7m 
    
    Para não precisar ficar criando várias variaveis nos criamos um objeto com as caracteristica necessárias
*/

const person = {
    name: "Rodolfo",
    age: 28,
    sexo: "Male",
    height: 1.7,
    address: {
        street: "St. Adalberto Rodrigues",
        number: 8,
        country: "Brasil"
    }
}

console.log(person.address.number)
console.log(person.address.number.what) // nesse caso não existe what então vai dar undefined



/* BOOLEAN */

let myNumberOne = 10
let myNumberTwo = 20

let myNumberThird = 20
let myNumberFour = 30

// Atribuição então agora o myNumberOne é 20 esta atribuindo o valor ao myNumberOne
myNumberOne = myNumberTwo

console.log(myNumberOne)

// == -> sinal de comparação então esse valor(true ou false), vai ser true por conta da atribuição, para ser falso eu precisaria remover a atribuição myNumberOne = myNumberTwo
console.log(myNumberOne == myNumberThird)


// resultado falso porque eles não são iguais
console.log(myNumberThird == myNumberFour)




/* 
    ARRAY - Vetor - lista 

    Se cada pessoa que voce possuisse precisasse de uma variavel então é necessario uma forma mais usual de fazer
*/


const numbers = [10, 5, 234, 234]

// nos arrays começamos pela possição zero(0), colocar chaves ("[]")
console.log(numbers[0])

// undefined
console.log(numbers[4])


//qum array pode ter varios tipos de informações objeto, string, numero voce pode guardar cada tipo de dado que quiser


const people = [{
    name: "Rodolfo",
    age: 28,
    sexo: "Male",
    height: 1.7,
    address: "St. Adalberto Rodrigues, 8"
},
{
    name: "Alberto",
    age: 18,
    sexo: "Male",
    height: 1.9,
    address: "St. Piracicaba Aspar, 34"
},
{
    name: "Luiz",
    age: 23,
    sexo: "Male",
    height: 1.5,
    address: "St. Junary Fonts, s/N"
},
]