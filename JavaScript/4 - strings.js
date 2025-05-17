/*
    String

    - String é uma cadeia de caracteres, ou seja, qualquer sequência de texto entre aspas.
    - Em JavaScript, temos 3 formas de declarar strings:
        1. Aspas duplas (" ")
        2. Aspas simples (' ')
        3. Template literals (``) -> crase
*/

// Forma mais comum: aspas duplas
let myFirstString = "Posso escrever qualquer texto aqui dentro."

// Também é possível usar aspas simples
let mySecondString = 'Agora com aspas simples, que funciona igual.'

// Template literals (ou template strings) com crase (` `)
// Vantagem: permite escrever textos multilinhas e inserir variáveis dentro do texto facilmente.
let myThirdString = `Usando a crase, consigo criar strings mais poderosas.`

// Quando seu texto precisa conter aspas dentro dele, é possível alternar as aspas para evitar erros
let exampleWithQuotes = 'Fulano de Tal disse: "Estou aprendendo JavaScript!"'
// Ou ao contrário:
let exampleWithSingleQuotes = "Fulano de Tal disse: 'Estou aprendendo JavaScript!'"

// Exemplo com Template Literals utilizando variáveis e expressões dentro da string
let numberOfPeopleInClass = 34

// Com as crases, podemos usar ${} para interpolar variáveis e até expressões matemáticas
let myTextWithSuperPowers = `Tinham exatamente ${numberOfPeopleInClass} pessoas na aula.
Durante a aula, calcularam que o resultado de 10 + 45 é ${10 + 45}.`

// Exibindo o resultado no console
console.log(myTextWithSuperPowers)

/*
    Dicas importantes:
    - Use Template Literals (` `) sempre que precisar:
        * Inserir variáveis no meio do texto;
        * Escrever textos longos ou multilinhas;
    - Para textos simples, tanto faz usar aspas simples ou duplas. Escolha uma e mantenha padrão.
    - Evite misturar tipos de aspas no mesmo projeto sem necessidade.
*/
