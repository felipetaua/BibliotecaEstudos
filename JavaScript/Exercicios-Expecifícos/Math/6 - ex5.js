// 5️⃣ CALCULADORA DE RAÍZES
//     - O usuário informa:
//       → Um número qualquer.
//       → E a raiz que deseja calcular (ex.: 2 = raiz quadrada, 3 = raiz cúbica).
//     - Fórmula: resultado = numero ** (1 / raiz);

const numberRaiz = 25
const raizCalcular = 2

function calcRaiz(number, raiz) {
    result = number ** (1 / raiz)
    console.log(result)
}

calcRaiz(numberRaiz, raizCalcular)