// 4️⃣ SIMULADOR DE DADO
//     - Crie uma função que simula um dado de 6 faces.
//     - Depois permita que o usuário defina quantas faces o dado tem.

let qtdFacesDado = 7

function simuladorDeDado(facesDado) {
    numberDado = Math.floor(Math.random() * (facesDado - 1 + 1) + 1)
    return console.log(`O numero do dado é: ${numberDado}`)
}

simuladorDeDado(qtdFacesDado)

