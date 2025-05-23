/*Faça um programa onde os jurados vão dar a explicação para cada nota dada.
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente
 */


const nota = 0

switch (nota) {
    case 0:
        console.log("Você foi desclassificado")
    break;

    case 1:
        console.log("Infelizmente voce cometeu duas faltas graves")
    break;

    case 2:
        console.log("Infelizmente cometeu uma falta grave")
    break;

    case 3:
        console.log("cometeu duas faltas médias")
    break;

    case 4:
        console.log("Voce cometeu uma falta média")
    break;

    case 5:
        console.log("Apenas uma falta")
    break;

    case 6:
        console.log("Voce foi muito genérico")
    break;

    case 7:
        console.log("Gostei mais faltou técnica")
    break;

    case 8:
        console.log("voce mandou muito bem na técnica")
    break;

    case 9:
        console.log("Uma apresentação surpreendente")
    break;

    case 10:
        console.log("Voce encantou! Um show de tecnica e criatividade")
    break;

    default:
        break;
}
