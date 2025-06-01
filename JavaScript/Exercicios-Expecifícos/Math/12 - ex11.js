// 🧠 SISTEMA DE LOTERIA SIMPLES
//     - O usuário escolhe 6 números entre 1 e 60.
//     - O sistema sorteia 6 números aleatórios (sem repetir).
//     - Mostre quantos números ele acertou.

// 🧠 SISTEMA DE LOTERIA PROFISSIONAL
// O usuário escolhe 6 números entre 1 e 60 (sem repetir).
// O sistema sorteia 6 números aleatórios (sem repetir).
// Mostra quantos números ele acertou.

const userPalpites = [40, 10, 45, 12, 20, 33]; // Palpites do usuário

const loteriaNumbers = [];

while (loteriaNumbers.length < 6) {
    const numberRandom = Math.floor(Math.random() * 60) + 1;
    if (!loteriaNumbers.includes(numberRandom)) {
        loteriaNumbers.push(numberRandom);
    }
}

// 🔍 Verificar quantos números o usuário acertou
let acertos = 0;

for (let i = 0; i < userPalpites.length; i++) {
    if (loteriaNumbers.includes(userPalpites[i])) {
        acertos++;
    }
}

// 📜 Resultados
console.log(`🎯 Números sorteados: ${loteriaNumbers}`);
console.log(`🧠 Seus palpites: ${userPalpites}`);
console.log(`✅ Você acertou ${acertos} número(s)!`);
