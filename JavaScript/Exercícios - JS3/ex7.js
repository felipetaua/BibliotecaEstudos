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
    salario: 1500,
}, 
{
    nome: "Maria",
    qtdFilhos: 2,
    salario: 1200,
},
{
    nome: "Julia",
    qtdFilhos: 1,
    salario: 2520,
}]

function mediaSalarialPopulacao() {
    let somaSalario = 0
    for (let i = 0; i < population.length; i++) {
        somaSalario += population[i].salario
    }
    mediaSalarial = somaSalario / population.length
}
mediaSalarialPopulacao();

function mediaFilhosPopulacao() {
    let somaFilhos = 0
    for (let i = 0; i < population.length; i++) {
        somaFilhos += population[i].qtdFilhos
    }
    mediaFilhos = somaFilhos / population.length 
    // console.log(`Quantidade de filhos por pessoa ${mediaFilhos}`)
}

mediaFilhosPopulacao()

function maiorSalario() {
}

maiorSalario()