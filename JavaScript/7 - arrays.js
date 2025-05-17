/*
    ARRAYS (ou VETORES ou LISTAS)

    - Arrays são estruturas que armazenam múltiplos valores em uma única variável.
    - Permitem guardar diferentes elementos em ordem indexada (começando por zero).
    - São ideais quando temos coleções de dados do mesmo tipo ou diferentes, sem a necessidade de criar uma variável para cada item.

    Por que usar arrays?
    - Organizam dados em sequências de forma eficiente.
    - Facilitam a manipulação com métodos nativos como push, pop, filter, map, etc.
    - Melhoram a legibilidade e manutenibilidade do código.
*/

// Exemplo básico de array com números
const numbers = [10, 5, 234, 234]

// Acessando elementos pelo índice (lembrando: começa do 0)
console.log(numbers[0]) // Saída: 10

// Tentando acessar um índice que não existe
console.log(numbers[4]) // Saída: undefined
// Reflexão: JS não gera erro ao acessar um índice inexistente, apenas retorna undefined.
// Isso pode mascarar erros em códigos que não validam corretamente o índice antes de acessar.


// Arrays podem armazenar QUALQUER tipo de dado em JS (inclusive misturados)
const people = [
    {
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
    }
]

// Acessando o primeiro objeto dentro do array e sua propriedade name
console.log(people[0].name) // Saída: Rodolfo

// Acessando o terceiro elemento e sua altura
console.log(people[2].height) // Saída: 1.5

/*
    Reflexão crítica:
    - Em JS, Arrays são objetos especiais, ou seja, eles têm métodos e propriedades herdados de 'Array.prototype'.
    - Arrays permitem armazenar diferentes tipos ao mesmo tempo (não há restrição), mas boas práticas sugerem que você mantenha a coerência de tipo dentro do array (por exemplo, apenas objetos de 'pessoa' em um array 'people') para manter a previsibilidade e facilitar operações em massa (como map, filter, etc.).
    - Embora você possa acessar um índice inexistente sem erro, é responsabilidade do desenvolvedor validar o comprimento antes de acessar ou usar abordagens mais seguras (ex: Optional chaining ou validação manual).

    Curiosidade:
    - Arrays no JS são dinâmicos, ou seja, você pode adicionar ou remover elementos sem definir o tamanho inicial.
    - O array vai se adaptando conforme você faz 'push', 'pop', 'splice', etc.

    Atenção:
    - Arrays em JS são tratados por referência. Se você alterar um item dentro do array, a mudança se reflete em todas as referências daquele array.
*/

