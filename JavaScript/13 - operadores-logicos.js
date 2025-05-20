/* OPERADORES LÒGICOS

&&  -> E  // FILHO OBEDIENTE
    true && true = true
    true && false = false
    false && false = false

||  -> Ou // FILHO ESPERTINHO
    true || true = true
    true || false = true
    false || false = false

!   -> Negação // FILHO DO CONTRA(REBELDE)
    !true = false
    !false = true


    Lógica E
    Para fazer uma tranferência, o que é necessário?
    - Ter saldo em conta
    - A conta não pode estar bloqueada
    - A conta de destino precisa estar correta

    Lógica Ou
    o que é necessário para desbloquear a tela?

    - Digitar a senha correta
    - Fazer o reconhecimento por digital
    - Fazer o reconhecimento facial

    
    Respeite a ordem de precedência:

        Parênteses () → sempre resolvem primeiro.
        ! (negação) → depois.
        && (E) → depois.
        || (OU) → por último.
 */

console.log(!(!(true && true && true) && !(true && true || true)))

// Etapa 1: Avaliar expressões internas
const etapa1 = true && true && true;           // true
const etapa2 = true && true || true;           // true

// Etapa 2: Negações internas
const negacao1 = !etapa1;                      // !true => false
const negacao2 = !etapa2;                      // !true => false

// Etapa 3: Combinar as negações com &&
const combinacao = negacao1 && negacao2;       // false && false => false

// Etapa 4: Negar o resultado final
const resultadoFinal = !combinacao;            // !false => true

// Mostrar todas as etapas
console.log("etapa1 (true && true && true):", etapa1);
console.log("etapa2 (true && true || true):", etapa2);
console.log("negacao1 (!etapa1):", negacao1);
console.log("negacao2 (!etapa2):", negacao2);
console.log("combinacao (negacao1 && negacao2):", combinacao);
console.log("resultadoFinal (!combinacao):", resultadoFinal);  // true
