/*
    OBJETOS EM JAVASCRIPT

    - Objetos são coleções de propriedades no formato chave: valor.
    - Eles servem para organizar dados complexos de forma estruturada e agrupada.
    - Permitem agrupar diferentes tipos de dados em uma única entidade.
    
    Exemplo conceitual de propriedades:
        marca: Samsung
        cor: preta
        tamanho: 75"
        
        nome: Rodolfo
        idade: 28
        altura: 1.7m

    Por que usar objetos?
    - Ao invés de criar várias variáveis soltas:
        let nome = "Rodolfo"
        let idade = 28
        let altura = 1.7
    - Criamos um objeto para agrupar todas essas informações em uma estrutura única e lógica.
    - Isso facilita o gerenciamento, leitura e manutenção do código.
*/

// Criando um objeto 'person' com propriedades e valores
const person = {
    name: "Rodolfo",
    age: 28,
    sexo: "Male",
    height: 1.7,
    // Objetos podem conter outros objetos (aninhamento)
    address: {
        street: "St. Adalberto Rodrigues",
        number: 8,
        country: "Brasil"
    }
}

// Acessando propriedades do objeto usando notação de ponto (dot notation)
console.log(person.address.number) // saída: 8

// Tentando acessar uma propriedade que NÃO existe dentro do objeto
console.log(person.address.number.what) // saída: undefined

/*
    Explicação crítica:
    - Quando tentamos acessar uma propriedade inexistente em um objeto, JS NÃO gera erro automaticamente.
    - Ao invés disso, retorna 'undefined', o que pode mascarar erros silenciosos no código.
    - Em JS, acessar propriedades inexistentes é seguro em tempo de execução, mas pode gerar bugs se você não validar corretamente.
    - Por exemplo, person.address.number.what tenta acessar 'what' dentro do número 8, que é um tipo 'number' (não um objeto).
    - Como 8 não tem propriedades, o retorno padrão é 'undefined'.

    Reflexão sobre boas práticas:
    - Quando acessar objetos aninhados, sempre valide se o nível anterior existe para evitar erros em projetos maiores.
    - Uso seguro com operador de encadeamento opcional (Optional Chaining):
        console.log(person.address?.number?.what) // Retorna undefined sem lançar erro
    - Isso evita que JS tente acessar uma propriedade dentro de algo que não é objeto (como 'number').

    Conclusão:
    - Objetos são poderosos para estruturar dados complexos.
    - Devem ser usados com atenção para evitar acessos errados a propriedades inexistentes.
    - Conhecer ferramentas modernas, como Optional Chaining (?.), ajuda a escrever código mais robusto e seguro.
*/

/*
    Extra:
    - Também podemos acessar propriedades com notação de colchetes, útil quando a chave é dinâmica ou contém espaços:
        console.log(person["name"])
*/
