// typeof: retorna uma string com o tipo primitivo do valor ou objeto
const myNumber = 20           // tipo: number
const myString = "Olá, eu sou uma String"  // tipo: string

const myObject = {
    name: "Object",   // tipo de name: string
    age: 20           // tipo de age: number
}

// Exibe os tipos das variáveis
console.log("Tipo de myNumber:", typeof myNumber)   // "number"
console.log("Tipo de myString:", typeof myString)   // "string"
console.log("Tipo de myObject:", typeof myObject)   // "object"

// Agora vamos usar o operador delete para remover uma propriedade do objeto

console.log("Antes do delete:", myObject)

// Remove a propriedade 'age' do objeto
delete myObject.age

console.log("Depois do delete:", myObject)
