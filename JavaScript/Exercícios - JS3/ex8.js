/*
    Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
- Você deve enviar como argumentos da função
- Valor inicial investido
- Valor atual do investimento
- Tempo em meses, que o valor está investido

- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%.
Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
https://www.youtube.com/watch?v=lhJJX69I8ak

*/

const investimentoInicial = 2000
const investimentoAtual = 2600

const tempoInvestido = 12

function taxaJurosInvestimento(valorInicial, valorAtual, tempoInvestido) {
    const juros = valorAtual - valorInicial
    const taxa = juros / (valorInicial * tempoInvestido) * 100
    const taxaFormatada = `${taxa}%`
    return taxaFormatada
} 

taxaMensal = taxaJurosInvestimento(investimentoInicial, investimentoAtual, tempoInvestido)

console.log(taxaMensal)