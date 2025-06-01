//  7️⃣ JOGO DE CARA OU COROA
//     - Simule cara ou coroa usando Math.random().
//     - Se 0 → Cara / Se 1 → Coroa.
//     - Crie uma função chamada caraCoroa().

function caraCoroa() {
    const resultado = Math.floor(Math.random() * 2); // 0 ou 1
    const lado = resultado === 0 ? "Cara" : "Coroa";

    console.log(`
🎲 JOGO: CARA OU COROA
Resultado: ${lado}
------------------------
    `);
}

caraCoroa();
