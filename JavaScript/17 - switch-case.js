/* 
===============================================
        CONTROLE DE FLUXO - SWITCH CASE
===============================================

O switch é uma estrutura de controle usada para comparar UM valor contra VÁRIAS possibilidades.

É parecido com uma sequência de "if...else if", mas geralmente mais organizado quando lidamos
com muitos valores específicos.

-----------------------------------------------
SINTAXE BÁSICA:
-----------------------------------------------

switch (expressao) {
    case valor1:
        // código se expressao === valor1
        break;

    case valor2:
        // código se expressao === valor2
        break;

    default:
        // código se nenhum case for igual
        break;
}

-----------------------------------------------
FUNCIONAMENTO:
-----------------------------------------------
1. O valor entre parênteses no `switch` é avaliado.
2. Cada `case` é comparado com esse valor usando === (comparação estrita).
3. Se for igual, executa o bloco correspondente.
4. O `break` impede que os próximos cases também sejam executados (sem ele, o código "cai").
5. O `default` funciona como um "else": executa se nenhum case for verdadeiro.

-----------------------------------------------
EXEMPLO PRÁTICO:
-----------------------------------------------

const temperatura = 36

switch (temperatura) {
    case 30:
        console.log("Temperatura MUITO abaixo do normal")
        break;

    case 33:
        console.log("Temperatura abaixo do normal")
        break;

    case 36:
        console.log("Temperatura normal")
        break;

    default:
        console.log("Temperatura fora do esperado")
        break;
}

-----------------------------------------------
CUIDADO:
-----------------------------------------------
- A comparação é estrita (===), ou seja: 10 !== "10"
- Use switch quando tiver muitas opções fixas e diretas para comparar
- NÃO é recomendado para condições com maior/menor (ex: idade > 18)
- `case` sem `break` vai continuar executando os próximos (efeito *fallthrough*)

-----------------------------------------------
EXEMPLO COM BOOLEANO:
-----------------------------------------------

const status = false

switch (status) {
    case true:
        console.log("É verdadeiro")
        break;

    case false:
        console.log("É falso")
        break;
}

-----------------------------------------------
EXEMPLO DE AGRUPAMENTO (sem break):

const dia = 0

switch (dia) {
    case 0:
    case 6:
        console.log("Final de semana")
        break;

    default:
        console.log("Dia útil")
        break;
}

===============================================
*/


const key = 0


switch (key) {
    case 0:
        
        break;

    default:
        break; // sai do switch case
}


const temperature = 36

switch (temperature) {
    case 30: 
        console.log("A pessoa está com a temperatura MUITO abaixo do normal")
    break;

    case 33:
        console.log("A pessoa está com a temperatura baixo do normal ")
    break;

    case 36: 
        console.log("A pessoa está com a temperatura normal")
    break;

    default:
        console.log("Temperatura não encontrada")
    break;
}

const bool = false

switch (bool) {
    case true:
        console.log("it`s true")
    break;

    case false:
        console.log("ist`s false")
    break;
}