/*
    NUMBERS

    - Em JavaScript, Numbers são o tipo de dado numérico.
    - Eles podem representar:
        * Números inteiros (ex: 10, -5, 0)
        * Números decimais (ex: 10.5, -3.14)
        * Operações matemáticas que resultam em números.
*/

// Exemplo de operação aritmética com resultado numérico
const number1 = 234 / 2 // resultado: 117 (tipo: Number)

// Aqui, mesmo que o conteúdo pareça uma operação, ele é tratado como String, pois está entre aspas.
const numberTwo = "234/2" // tipo: String (não será calculado, é só um texto)

console.log(number1)    // 117
console.log(numberTwo)  // "234/2" (a operação não acontece, é apenas texto)

// Atenção: JS é uma linguagem de tipagem dinâmica, mas o tipo é importante.
// Se você tentar usar operações numéricas em uma String que contém texto, pode gerar resultados inesperados.


// Números inteiros e decimais são do mesmo tipo em JS: Number
const numberOne = 234.0 // Número decimal, mas tratado exatamente como 234 (JS não diferencia internamente)

// Vamos ver o que acontece quando tentamos dividir por algo que não é número:
const myString = "abc"
const result = numberOne / myString

console.log(result) // resultado: NaN (Not a Number)

/*
    Entenda o NaN (Not a Number):
    - Indica que a operação matemática falhou.
    - Mesmo sendo chamado "Not a Number", o tipo de NaN em JS é... Number! (comportamento curioso do JS)
    - Você pode verificar com typeof result -> retornará "number".
    - Esse comportamento reflete a flexibilidade (e armadilhas) da tipagem dinâmica em JS.

    Resumo crítico:
    - Sempre que trabalhar com dados que vêm do usuário ou de fontes externas, valide antes de realizar operações matemáticas.
    - Em JS, o motor da linguagem tenta ao máximo converter os tipos automaticamente (coerção implícita), mas isso pode causar erros silenciosos.
    - Não confunda "parece número" com "é número". Sempre cheque!
*/

/*
    Dica extra:
    - Para validar se algo é NaN de forma segura, use a função isNaN(valor).
    - Exemplo:
        console.log(isNaN(result)) // true
*/

