// 8️⃣ DESCONTO ALEATÓRIO
//     - Sorteie um desconto entre 5% e 30%.
//     - Mostre:
//       → Valor original do produto (ex.: R$100)
//       → Desconto aplicado
//       → Valor final com desconto

function gerarNotaFiscal(produto) {
    const descontoPercentual = Math.floor(Math.random() * (30 - 5 + 1) + 5);
    const valorDesconto = (produto.valor * descontoPercentual) / 100;
    const valorFinal = (produto.valor - valorDesconto).toFixed(2);

    console.log(`
        🧾 NOTA FISCAL
        ------------------------------
        Produto: ${produto.nome}
        Valor original: R$ ${produto.valor.toFixed(2)}
        Desconto aplicado: ${descontoPercentual}%
        Valor do desconto: R$ ${valorDesconto.toFixed(2)}
        Valor final com desconto: R$ ${valorFinal}
        ------------------------------
    `);
}

// ✅ Exemplo de uso:
const produto = { nome: "Ventilador", valor: 100 };
gerarNotaFiscal(produto);

