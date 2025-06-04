/*
    ARRAYS - MÉTODOS
*/

// push
// length
// sort
// delete


// splice (unir / ligar)
//slice (fatiar)
// pop
// shift

const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Murilo']

students.push('Rodolfo');
students.push('Tauã'); // Você já usou este corretamente!
console.log("Depois do push():", students);
// Saída: ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Murilo', 'Rodolfo', 'Tauã']

/*
    length
    Esta é uma propriedade (não um método) que retorna o número de elementos em um array.
*/ 
console.log("Comprimento do array (length):", students.length);
// Saída: 8 (após os pushes anteriores)

/*
    sort()
Ordena os elementos do array. Por padrão, a ordenação é feita em ordem alfabética (para strings) ou numérica.
*/

students.sort();
console.log("Depois do sort():", students);
// Saída: ['Bia', 'Carla', 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo', 'Tauã']

/*
    delete (operador)
O operador delete remove um elemento de um array, mas deixa um "buraco" (um valor undefined ou empty) no lugar. Geralmente, pop(), shift(), ou splice() são preferíveis para remover elementos de arrays.
*/

delete students[1]; // Remove o elemento no índice 1 ('Carla' após o sort)
console.log("Depois do delete students[1]:", students);
// Saída: ['Bia', empty, 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo', 'Tauã']
console.log("Elemento no índice 1:", students[1]); // Saída: undefined

// Atenção: O length do array não muda após usar delete dessa forma.


/*
    splice()
Altera o conteúdo de um array removendo, substituindo ou adicionando elementos. É um método muito versátil!

Sintaxe: array.splice(índiceInicial, quantidadeParaRemover, elemento1, elemento2, ...)
*/

// Vamos recriar o array para exemplos mais claros com splice
let fruits = ['Banana', 'Laranja', 'Maçã', 'Manga'];
console.log("Array fruits original:", fruits);

// Remover 1 elemento a partir do índice 2 ('Maçã')
fruits.splice(2, 1);
console.log("Depois de splice(2, 1) - removeu 'Maçã':", fruits);
// Saída: ['Banana', 'Laranja', 'Manga']

// Remover 0 elementos a partir do índice 1 e adicionar 'Limão' e 'Abacaxi'
fruits.splice(1, 0, 'Limão', 'Abacaxi');
console.log("Depois de splice(1, 0, 'Limão', 'Abacaxi') - adicionou:", fruits);
// Saída: ['Banana', 'Limão', 'Abacaxi', 'Laranja', 'Manga']

// Remover 2 elementos a partir do índice 0 ('Banana', 'Limão') e adicionar 'Uva'
fruits.splice(0, 2, 'Uva');
console.log("Depois de splice(0, 2, 'Uva') - removeu e adicionou:", fruits);
// Saída: ['Uva', 'Abacaxi', 'Laranja', 'Manga']


/*
    slice()
Retorna uma cópia superficial de uma porção de um array em um novo array. O array original não é modificado. 🍉

Sintaxe: array.slice(índiceInicial, índiceFinal_nãoIncluso)
*/

const animals = ['Gato', 'Cachorro', 'Pássaro', 'Peixe', 'Coelho'];
console.log("Array animals original:", animals);

// Pega os elementos do índice 1 ('Cachorro') até o índice 3 ('Peixe'), sem incluir o 3.
const someAnimals = animals.slice(1, 3);
console.log("Depois de slice(1, 3):", someAnimals);
// Saída: ['Cachorro', 'Pássaro']

// Se o índice final não for fornecido, ele fatia até o final do array.
const lastAnimals = animals.slice(2);
console.log("Depois de slice(2):", lastAnimals);
// Saída: ['Pássaro', 'Peixe', 'Coelho']

console.log("Array animals original (não modificado):", animals);
// Saída: ['Gato', 'Cachorro', 'Pássaro', 'Peixe', 'Coelho']

/*
    pop()
Remove o último elemento de um array e retorna esse elemento. Modifica o array original.
*/ 

// Usando o array students novamente, lembre-se que ele foi modificado
console.log("Array students antes do pop():", students);
// Exemplo de saída (dependendo dos passos anteriores): ['Bia', empty, 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo', 'Tauã']

const removedStudentPop = students.pop();
console.log("Elemento removido com pop():", removedStudentPop); // Saída: 'Tauã'
console.log("Array students depois do pop():", students);
// Exemplo de saída: ['Bia', empty, 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo']


/*
    shift()
Remove o primeiro elemento de um array e retorna esse elemento. Modifica o array original e reindexa os demais elementos.
*/
console.log("Array students antes do shift():", students);
// Exemplo de saída: ['Bia', empty, 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo']

const removedStudentShift = students.shift();
console.log("Elemento removido com shift():", removedStudentShift); // Saída: 'Bia'
console.log("Array students depois do shift():", students);
// Exemplo de saída: [empty, 'João', 'Maria', 'Murilo', 'Pedro', 'Rodolfo']
// Observe que o 'empty' que estava no índice 1 agora está no índice 0.