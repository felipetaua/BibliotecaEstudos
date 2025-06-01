//  7️⃣ JOGO DE CARA OU COROA
//     - Simule cara ou coroa usando Math.random().
//     - Se 0 → Cara / Se 1 → Coroa.
//     - Crie uma função chamada caraCoroa().

const numberRandom = Math.floor(Math.random() * (1 - 0 + 1))
console.log(numberRandom)


function caraCoroa(value) {
    if (value === 0) {
        console.log("Cara")
    } else if (value === 1) {
        console.log("Coroa")
    } else {
        console.log("O valor não pode ser utilizado")
    }
}

caraCoroa(numberRandom)
