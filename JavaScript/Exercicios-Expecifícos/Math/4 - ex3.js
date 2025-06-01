// 3️⃣ ARREDONDAMENTOS PRÁTICOS
//     - Receba um número decimal via prompt.
//     - Mostre:
//       → Arredondado para cima (Math.ceil())
//       → Arredondado para baixo (Math.floor())
//       → Arredondamento normal (Math.round())

const userNumber = 2.5

const roundingUp = Math.ceil(userNumber)
const roundingDown = Math.floor(userNumber)
const roundingDefault = Math.round(userNumber)

console.log(`Arredondamento para cima: ${roundingUp} \n Arredondamento para baixo: ${roundingDown} \n Arredondamento mais próximo: ${roundingDefault}`)