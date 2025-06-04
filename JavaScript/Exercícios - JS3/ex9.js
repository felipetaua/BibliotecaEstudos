/* Escreva um programa onde, voce cria uma funcao geradora de desconto.
- A função aceita 4 parametros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleano que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma:
- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
- Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO

- A função deve imprimir na tela:
- Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
- Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a proxima compra.
*/

nomeCliente = "Rochele"
valorTotalCompra = 100
primeiraCompraCliente = false
compraVista = false


function geraDesconto(nome, valorCompra, primeiraCompra, aVista) {
    let desconto = 0;

    if (primeiraCompra && aVista) {
        if (valorCompra > 1000) {
            desconto = 30;
        } else if (valorCompra > 500) {
            desconto = 25;
        } else {
            desconto = 20;
        }
    } 
    else if (primeiraCompra && !aVista) {
        if (valorCompra > 1000) {
            desconto = 20;
        } else if (valorCompra > 500) {
            desconto = 15;
        } else {
            desconto = 10;
        }
    } 
    else if (!primeiraCompra && aVista) {
        if (valorCompra > 1000) {
            desconto = 20;
        } else if (valorCompra > 500) {
            desconto = 15;
        } else {
            desconto = 10;
        }
    } 
    else if (!primeiraCompra && !aVista) {
        if (valorCompra > 1000) {
            desconto = 10;
        } else if (valorCompra > 500) {
            desconto = 5;
        } else {
            desconto = 0;
        }
    }

    // Se tem desconto
    if (desconto > 0) {
        const valorDesconto = valorCompra * (desconto / 100);
        const valorFinal = valorCompra - valorDesconto;

        console.log(`
        -----------------------------------------------
        Obrigado pela sua compra, ${nome}!
        Valor total da compra: R$ ${valorCompra.toFixed(2)}
        Desconto aplicado: ${desconto}%
        Valor com desconto: R$ ${valorFinal.toFixed(2)}
        -----------------------------------------------
        `);
    } 
    
    // Se não tem desconto, gera cupom para próxima compra
    else {
        const cupom = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Gera entre 10 e 20
        console.log(`
        -----------------------------------------------
        Obrigado pela sua compra, ${nome}!
        Valor total da compra: R$ ${valorCompra.toFixed(2)}
        Infelizmente, você não recebeu desconto desta vez.
        Aqui vai um cupom de ${cupom}% de desconto para sua próxima compra!
        -----------------------------------------------
        `);
    }
}


geraDesconto(nomeCliente, valorTotalCompra, primeiraCompraCliente, compraVista )
