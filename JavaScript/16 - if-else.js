/* 
===========================
  IF, ELSE IF e ELSE
===========================
O JavaScript toma decisões com base em condições. Usamos:

- if       => "se"
- else if  => "se não, mas..."
- else     => "caso contrário"
*/


// EXEMPLO 1 - VERIFICAÇÃO SIMPLES COM IF/ELSE
const idade = 17

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}
// Saída: Menor de idade



// EXEMPLO 2 - COMPARAÇÃO COM ELSE IF (faixas)
const nota = 6.5

if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Bom")
} else if (nota >= 5) {
    console.log("Regular")
} else {
    console.log("Reprovado")
}
// Saída: Regular

// OBS: A primeira condição verdadeira para a execução.
// O resto é ignorado.



// EXEMPLO 3 - SEMÁFORO (comparação direta)
const cor = "amarelo"

if (cor === "verde") {
    console.log("Pode passar")
} else if (cor === "amarelo") {
    console.log("Atenção")
} else if (cor === "vermelho") {
    console.log("Pare")
} else {
    console.log("Cor inválida")
}
// Saída: Atenção

// EXEMPLO 4 - DIFERENÇA ENTRE IFs SEPARADOS E ELSE IF
const numero = 70

if (numero > 50) {
    console.log("É maior que 50")
}
if (numero > 30) {
    console.log("É maior que 30")
}
// Saída: Imprime as duas mensagens

// Agora com ELSE IF:
if (numero > 50) {
    console.log("É maior que 50")
} else if (numero > 30) {
    console.log("É maior que 30")
}
// Saída: Apenas "É maior que 50"



// EXEMPLO 5 - CAUTELA COM CONDIÇÕES REPETIDAS
const temperatura = 41

if (temperatura >= 36 && temperatura <= 39) {
    console.log("Pessoa saudável")
} else if (temperatura > 39) {
  console.log("Pessoa com febre") // este será executado
} else {
    console.log("Temperatura fora do esperado")
}

// No seu código anterior, havia várias condições iguais (temperature > 39).
// Apenas a primeira delas será considerada.



// EXEMPLO 6 - USO DE FLAGS BOOLEANAS
const temSaldo = true
const contaAtiva = true
const contaDestinoExiste = true

if (temSaldo && contaAtiva && contaDestinoExiste) {
    console.log("Transferência realizada")
} else {
    console.log("Transferência negada")
}

// - Use 'else if' para condições exclusivas ou faixas
// - Use 'else' como fallback final
// - Evite repetir a mesma condição
// - Prefira ifs separados quando as verificações forem independentes
// - Comente o código ao estudar para fixar a lógica


//EXEMPLOS EXTRAS: 

const age = 17

if(age >= 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa NÃO é maior de idade")
}

console.log("Terminou de executar meu código")


const temperature = 49

if (temperature >= 36 && temperature <= 39) {
    console.log("A pessoa está saudável")
} else if (temperature > 39 && temperature <= 40) {
    console.log("A pessoa está com febre")
} else if (temperature > 40 && temperature <= 41) {
    console.log("A pessoa está com febre alta ou pode estar com dengue")
} else if (temperature > 41) {
    console.log("A pessoa está com temperatura crítica, vá ao médico URGENTE!")
} else {
    console.log("Temperatura anormal, procure um médico")
}
