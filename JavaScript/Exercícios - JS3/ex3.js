/*
    Escreva um programa onde, você chame uma função, e ela diga a hora exata!
*/


function hourNow() {
    let now = new Date()

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let secconds = now.getSeconds();

    console.log(`${hour} : ${minutes} : ${secconds}`)
}

hourNow()