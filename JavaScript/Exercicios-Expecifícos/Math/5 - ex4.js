// 4️⃣ SIMULADOR DE DADO
//     - Crie uma função que simula um dado de 6 faces.
//     - Depois permita que o usuário defina quantas faces o dado tem.

function simuladorDeDado(facesDado = 6) {
    if (!Number.isInteger(facesDado) || facesDado < 2) {
        console.log("❌ Erro: O dado deve ter no mínimo 2 faces.");
        return null;
    }

    const numeroSorteado = Math.floor(Math.random() * facesDado) + 1;
    return numeroSorteado;
}

// 🔹 Teste com dado padrão de 6 faces:
const resultadoDado6 = simuladorDeDado();
console.log(`🎲 Resultado do dado de 6 faces: ${resultadoDado6}`);

// 🔹 Teste com dado de 20 faces:
const resultadoDado20 = simuladorDeDado(20);
console.log(`🎲 Resultado do dado de 20 faces: ${resultadoDado20}`);

// 🔹 Teste com dado inválido:
const resultadoInvalido = simuladorDeDado(1); // Vai gerar erro tratado


