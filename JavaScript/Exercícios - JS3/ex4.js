/*
    Escreva um programa onde, você chame uma função, e ela diga que ano estamos
*/

function yearNow() {
    let currentYear = new Date().getFullYear();

    console.log("Estamos em:",currentYear)
}

yearNow()