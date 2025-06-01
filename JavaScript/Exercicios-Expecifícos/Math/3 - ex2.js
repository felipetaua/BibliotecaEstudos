// CALCULADORA DE POTÊNCIA
//     - Solicite dois números:
//       → Primeiro: Base
//       → Segundo: Expoente
//     - Calcule e mostre o resultado usando Math.pow() ou **.

const base =  25
const expoente = 5

const calculoPotencia = base ** expoente

const calcPot = Math.pow(base, expoente)// ex2

console.log("O resultado é:", calculoPotencia)