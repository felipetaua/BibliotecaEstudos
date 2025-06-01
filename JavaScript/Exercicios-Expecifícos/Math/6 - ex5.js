// 5️⃣ CALCULADORA DE RAÍZES
//     - O usuário informa:
//       → Um número qualquer.
//       → E a raiz que deseja calcular (ex.: 2 = raiz quadrada, 3 = raiz cúbica).
//     - Fórmula: resultado = numero ** (1 / raiz);
const numero = 25;
const raiz = 2;

function calcRaiz(numero, indiceDaRaiz) {
    if (indiceDaRaiz === 0) {
        console.log("❌ Erro: Não é possível calcular raiz de índice zero.");
        return;
    }

    if (numero < 0 && indiceDaRaiz % 2 === 0) {
        console.log(`❌ Erro: Não é possível calcular raiz ${indiceDaRaiz} de número negativo no conjunto dos reais.`);
        return;
    }

    const resultado = numero ** (1 / indiceDaRaiz);

    console.log(`
🔢 Número: ${numero}
🎯 Raiz de índice: ${indiceDaRaiz}
🧠 Resultado: ${resultado.toFixed(4)}
    `);
}

calcRaiz(numero, raiz);
