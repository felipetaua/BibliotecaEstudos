/*
    FILTER
    - Cria um novo array, a partir do array oercorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const list = [58,10, 12, 20, 28, 99, 27, 7, 84, 43, 1000];

const newList = list.filter( number => {
    if(number % 2 !== 0) return false
    if(number % 5 !== 0) return false

    return true
})

console.log(newList)


const companies = [
    { empresa: "Samsung", ceo: "Lee Jae-yong", anoFundacao: 1938, valorDeMercado: 450 },
    { empresa: "Microsoft", ceo: "Satya Nadella", anoFundacao: 1975, valorDeMercado: 3800 },
    { empresa: "Intel", ceo: "Pat Gelsinger", anoFundacao: 1968, valorDeMercado: 130 },
    { empresa: "Facebook (Meta)", ceo: "Mark Zuckerberg", anoFundacao: 2004, valorDeMercado: 1400 },
    { empresa: "Spotify", ceo: "Daniel Ek", anoFundacao: 2006, valorDeMercado: 60 },
    { empresa: "Apple", ceo: "Tim Cook", anoFundacao: 1976, valorDeMercado: 3600 },
];

const newCompanies = companies.filter( company => {
    if(company.anoFundacao <= 1975) return false
    if(company.valorDeMercado >= 200) return false

    return true
})

console.log(newCompanies)