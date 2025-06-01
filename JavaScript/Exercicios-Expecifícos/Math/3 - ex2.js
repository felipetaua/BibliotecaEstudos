// CALCULADORA DE POTÊNCIA
//     - Solicite dois números:
//       → Primeiro: Base
//       → Segundo: Expoente
//     - Calcule e mostre o resultado usando Math.pow() ou **.

function calculadoraPotencia(base, expoente) {
    const resultado = base ** expoente;
    console.log(`🔢 Base: ${base}`);
    console.log(`⬆️ Expoente: ${expoente}`);
    console.log(`⚙️ Resultado: ${resultado}`);
}

calculadoraPotencia(25, 5);
