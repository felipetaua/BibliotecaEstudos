/* 
    Crie 5 objetos nesse formato

const person = {
    none: ""
    idade:""
    sexo:""
    profissao: ""
    nacionalidade:""
}
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo,
a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

const peoples = [{
    nome: "Rodolfo",
    idade: 28,
    sexo: "Masculino",
    profissao: "Engenheiro de Software",
    nacionalidade: "Brasileiro"
},
{
    nome: "Tauã",
    idade: 18,
    sexo: "Masculino",
    profissao: "Desenvolvedor Front-end",
    nacionalidade: "Brasileiro"
},
{
    nome: "Nicoly",
    idade: 17,
    sexo: "Feminino",
    profissao: "Programadora Back-end",
    nacionalidade: "Inglesa"
},
{
    nome: "Leonardo",
    idade: 19,
    sexo: "Masculino",
    profissao: "BIG DATA",
    nacionalidade: "Brasileiro"
},
{
    nome: "João",
    idade: 16,
    sexo: "Masculino",
    profissao: "Engenheiro de Prompt",
    nacionalidade: "Paraguaio"
}
]


for(i = 0; i < peoples.length; i++ ) {
    if(peoples[i].idade >= 18 && peoples[i].nacionalidade === "Brasileiro") {
        console.log(`${peoples[i].nome} aprovado`)
    } else {
        console.log(`${peoples[i].nome} foi reprovado`)
    }
}
