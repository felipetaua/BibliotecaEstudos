/*
    String 

    - Cadeia de Caracteres

*/

// Formas de utilizar strings
let myFirstString = "E aqui dentro posso escrever o que eu quiser!"
let mySeccondString = 'Agora com aspas simples'
let mythirdString = `Com a crase eu também consigo` // template literals ou template string

// se o seu texto precisar utilizar aspas ou aspas simples é possivel alternar entre a versão com aspas ou aspas simples para não ter erro
let text = 'Fulano de Tal falou o seguinte: "eu aprendi js"'


let numberOfPeopleInClass = 34
// a crase tem a funcionalidade de conseguir colocar variaveis direto
let myTextWithSuperPowers = `Tinham exatamente ${numberOfPeopleInClass} pessoas na aula, e fizeram uma conta que o resultado foi ${10 + 45}`

console.log(myTextWithSuperPowers)

/* NUMBERS */

const number1 = 234/2  //number
const numberTwo = "234/2" // string

console.log(number1)
console.log(numberTwo) 

const numberOne = 234.0 // 
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

// == -> sinal de comparação então esse valor vai ser true por conta da atribuição, para ser falso eu precisaria remover a atribuição myNumberOne = myNumberTwo
console.log(myNumberOne == myNumberThird)


// resultado falso porque eles não são iguais
console.log(myNumberThird == myNumberFour)

