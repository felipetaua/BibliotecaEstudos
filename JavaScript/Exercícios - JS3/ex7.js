/*
    A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salario e numero de filhos. A prefeitura dessa cidade:
    - média do salário da população;
    - média do número de filhos;
    - maior salário;
    - percentual de pessoas com salário até R$100,00.
    - O final da leitura de dados se dará com a entrada de um salário negativo.
    - Faça isso usando uma função!
*/

const population = [ {
    nome: "Eduardo",
    qtdFilhos: 4,
    salario: 3500,
}, 
{
    nome: "Nicole",
    qtdFilhos: 2,
    salario: 2300,
},
{
    nome: "Pedro",
    qtdFilhos: 5,
    salario: 5000,
}, 
{
    nome: "Maria",
    qtdFilhos: 2,
    salario: 90,
},
{
    nome: "Julia",
    qtdFilhos: 1,
    salario: -2520,
}]

function mediaSalarialPopulacao() {
    let somaSalario = 0
    for (let i = 0; i < population.length; i++) {
        somaSalario += population[i]?.salario
    }
    const mediaSalarial = somaSalario / population.length
    return mediaSalarial
}

mediaSalarial = mediaSalarialPopulacao()

function mediaFilhosPopulacao() {
    let somaFilhos = 0
    for (let i = 0; i < population.length; i++) {
        somaFilhos += population[i]?.qtdFilhos
    }
    const mediaFilhos = somaFilhos / population.length 
    return mediaFilhos
}

mediaFilhos = mediaFilhosPopulacao()

function maiorSalarioPopulacao() {
    if (population.length === 0) {
        return undefined
    }

    let maiorSalario = population[0]?.salario

    for (let i = 0; i < population.length; i++) {
        
        if (population[i].salario > maiorSalario) {
            maiorSalario = population[i]?.salario 
        }
        
    }
    return maiorSalario
}

maiorSalario = maiorSalarioPopulacao()

function pessoasSalarioMaiorCem() {
    let pessoaSalarioMaior = 0

    if (population.length === 0) {
        return undefined
    }

    for (let i = 0; i < population.length; i++) {
        if( population[i].salario < 100) {
            pessoaSalarioMaior++
        }
    }

    const porcentagemPessoas = (pessoaSalarioMaior / population.length ) * 100

    return porcentagemPessoas
}

porcentagemPessoas = pessoasSalarioMaiorCem()

console.log
    (`
        SENSO DA POPULAÇÃO
    média do salárial da população: R$${mediaSalarial}
    Média de filhos percapita: ${mediaFilhos}
    Maior salário: R$${maiorSalario}
    Pessoas com salário até R$100,00: ${porcentagemPessoas}%
    `)
