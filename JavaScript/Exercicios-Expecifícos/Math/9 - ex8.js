// 8️⃣ DESCONTO ALEATÓRIO
//     - Sorteie um desconto entre 5% e 30%.
//     - Mostre:
//       → Valor original do produto (ex.: R$100)
//       → Desconto aplicado
//       → Valor final com desconto

produto = {
    nome: "Ventilador",
    valor: 100
}

const descontoRandom = Math.floor(Math.random() * (30 - 5 + 1) + 5 ) / 100 


function notaFiscal(nomeProduto,valorProduto, descontoRandom) {
    desconto = valorProduto * descontoRandom
    descontoFormatado = desconto.toFixed(0)
    
    produtoSemDesconto = valorProduto - descontoFormatado
    console.log
    (`
        Nome do produto: ${nomeProduto}
        Valor do produto: R$${valorProduto}
        Valor do desconto: ${descontoFormatado}%
        Valor final com desconto: R$${produtoSemDesconto}
    `)
}

notaFiscal(produto.nome, produto.valor, descontoRandom)
