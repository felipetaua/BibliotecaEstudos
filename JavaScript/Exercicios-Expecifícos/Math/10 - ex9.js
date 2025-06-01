// 9️⃣ SIMULADOR DE TEMPERATURA
//     - Gere um número aleatório entre -10°C e 40°C (arredondado).
//     - Exiba mensagens baseadas na temperatura:
//       → Abaixo de 0 → "Está congelando!"
//       → Entre 0 e 20 → "Clima frio."
//       → Entre 21 e 30 → "Clima agradável."
//       → Acima de 30 → "Clima quente!"

const temperaturaRandom = Math.floor(Math.random() * ( 40 - -10 + 1)) + -10;

function analiseTemperatura(temperatura) {

    if (temperatura < 0) {
        console.log("Está congelando!", temperatura,"Cº")
    } else if (temperatura >= 0  && temperatura <= 20) {
        console.log("Clima frio.", temperatura,"Cº")
    } else if (temperatura >= 21 && temperatura <= 30) {
        console.log("Clima agradável.", temperatura,"Cº")
    } else if (temperatura > 30) {
        console.log("Clima quente!", temperatura,"Cº")
    } else {
        console.log("Temperatura resgistrada:",temperaturaRandom,"Cº")
    }

    
}

analiseTemperatura(temperaturaRandom)


