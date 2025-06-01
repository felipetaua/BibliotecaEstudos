// 🔟 JOGO DE ADIVINHAÇÃO PROFISSIONAL
//     - O sistema sorteia um número entre 1 e 50.
//     - O usuário tenta adivinhar.
//     - O sistema informa:
//       → "🔼 Muito alto!" se o chute for maior.
//       → "🔽 Muito baixo!" se o chute for menor.
//     - O jogo continua até acertar.
//     - Mostre quantas tentativas foram necessárias.
const numeroSorteado = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;

// Simulando alguns palpites manualmente
const palpites = [10, 30, 40, 45, 47, 49, numeroSorteado];

for (let palpite of palpites) {
    tentativas++;

    console.log(`Tentativa ${tentativas}: Você chutou ${palpite}`);

    if (palpite > numeroSorteado) {
        console.log("🔼 Muito alto!");
    } else if (palpite < numeroSorteado) {
        console.log("🔽 Muito baixo!");
    } else {
        console.log(`🎯 Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas!`);
        break;
    }
}
