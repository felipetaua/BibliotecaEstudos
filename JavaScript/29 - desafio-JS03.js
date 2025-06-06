/*
[x] Escreva um programa onde, você chame uma função enviando um número,
a função deve imprime na tela os número de 1 até o número que você enviou.
[x] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10)
e escrever a tabuada de 1 a 10 do valor lido.
[x] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
[x] Escreva um programa onde, você chame uma função, e ela diga que ano estamos
[x] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
[x] Escreva um programa onde, você chame uma função mandando 2 argumentos, e a função RETORNA o maior e você mostra-lo na tela, fora da função

[x] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salario e numero de filhos. A prefeitura dessa cidade:
- média do salário da população;
- média do número de filhos;
- maior salário;
- percentual de pessoas com salário até R$100,00.
- O final da leitura de dados se dará com a entrada de um salário negativo.
- Faça isso usando uma função!

[x] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
- Você deve enviar como argumentos da função
- Valor inicial investido
- Valor atual do investimento
- Tempo em meses, que o valor está investido

- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%.
Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
https://www.youtube.com/watch?v=lhJJX69I8ak

[x] Escreva um programa onde, voce cria uma funcao geradora de desconto.
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