/* OPERADOR TERNÁRIO OU CONDICIONAL

    ?   se
    :   se não

*/

// 1. Operador ternário básico: condição ? valor_se_verdadeiro : valor_se_falso

const rain = true

// Se estiver chovendo, leve guarda-chuva, senão deixe.
const umbrella = rain 
  ? 'levar guarda-chuva' 
  : 'deixar guarda-chuva'

console.log("Situação climática:", umbrella)



// 2. Operador ternário com condição composta (AND lógico)

const balance = true           // Tem saldo
const isNotBlocked = true      // Conta não está bloqueada
const accountExist = true      // Conta existe

// Avaliação condicional com operadores lógicos
const transferOK = balance && isNotBlocked && accountExist 
  ? 'transferência realizada' 
  : 'transferência negada'

console.log("Status da transferência:", transferOK)


// COMPARAÇÃO COM IF/ELSE
let transferStatus = ''

if (balance && isNotBlocked && accountExist) {
  transferStatus = 'transferência realizada'
} else {
  transferStatus = 'transferência negada'
}

console.log("Status da transferência (if/else):", transferStatus)
