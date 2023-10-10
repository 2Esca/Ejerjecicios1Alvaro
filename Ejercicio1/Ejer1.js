
// Solicitamos al usuario que ingrese un número y almacenamos el valor en la variable "num"
const num = prompt("Introduzca un número: ");

// Convertimos el valor ingresado a un número entero usando parseInt
const numeroEntero = parseInt(num);

// Verificamos si el número es un NaN (no es un número válido)
if (isNaN(numeroEntero)) {
    console.log("Por favor, introduzca un número válido.");
} else {
    // Comprobamos si el número es par o impar
    if (numeroEntero % 2 === 0) {
        console.log(`${numeroEntero} es un número par.`);
    } else {
        console.log(`${numeroEntero} es un número impar.`);
    }
}