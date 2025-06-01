// 3️⃣ ARREDONDAMENTOS PRÁTICOS
//     - Receba um número decimal via prompt.
//     - Mostre:
//       → Arredondado para cima (Math.ceil())
//       → Arredondado para baixo (Math.floor())
//       → Arredondamento normal (Math.round())

function mostrarArredondamentos(numero) {
    const arredondadoCima = Math.ceil(numero);
    const arredondadoBaixo = Math.floor(numero);
    const arredondadoNormal = Math.round(numero);

    console.log(`
        🔢 Número informado: ${numero}
        ⬆️ Arredondado para cima: ${arredondadoCima}
        ⬇️ Arredondado para baixo: ${arredondadoBaixo}
        🎯 Arredondamento padrão (mais próximo): ${arredondadoNormal}
    `);
}

// 🔸 Teste:
mostrarArredondamentos(2.5);
