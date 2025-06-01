// 9️⃣ SIMULADOR DE TEMPERATURA
//     - Gere um número aleatório entre -10°C e 40°C (arredondado).
//     - Exiba mensagens baseadas na temperatura:
//       → Abaixo de 0 → "Está congelando!"
//       → Entre 0 e 20 → "Clima frio."
//       → Entre 21 e 30 → "Clima agradável."
//       → Acima de 30 → "Clima quente!"

const temperaturaRandom = Math.floor(Math.random() * (40 - (-10) + 1)) + (-10);

// 🔍 Função que analisa a temperatura
function analiseTemperatura(temperatura) {
    let mensagem = '';

    if (temperatura < 0) {
        mensagem = "❄️ Está congelando!";
    } else if (temperatura <= 20) {
        mensagem = "🧥 Clima frio.";
    } else if (temperatura <= 30) {
        mensagem = "🌤️ Clima agradável.";
    } else {
        mensagem = "🔥 Clima quente!";
    }

    console.log(`${mensagem} 🌡️ Temperatura: ${temperatura}°C`);
}

analiseTemperatura(temperaturaRandom);
