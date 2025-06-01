// 6️⃣ MAIOR E MENOR
//     - Peça 5 números ao usuário.
//     - Mostre qual foi o MAIOR e qual foi o MENOR utilizando Math.max() e Math.min().

const userNumbersTyped = [2, 3, 9, 6, 4]

biggestNumber = Math.max(...userNumbersTyped)
smallNumber = Math.min(...userNumbersTyped)

console.log(`O maior numero da lista é ${biggestNumber}\n O menos número é ${smallNumber}`)

// outra forma

let numeros = []

for (let i = 0; i < 5; i++) {
    let valor = prompt("Digite um número");// não funciona no console infelizmente
    numeros.push(Number(valor));
}

maiorNumero = Math.max(...numeros)
menorNumero = Math.min(...numeros)

console.log(`O maior numero da lista é ${maiorNumero}\n O menos número é ${menorNumero}`)





