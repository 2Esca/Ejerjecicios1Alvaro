// Solicitamos al usuario que ingrese un número y almacenamos el valor en la variable "numero"
const numero = prompt("Introduzca un número:");

// Convertimos el valor ingresado a un número entero usando parseInt
const numeroEntero = parseInt(numero);

// Verificamos si el número es un NaN (no es un número válido) o si es menor que 0
if (isNaN(numeroEntero) || numeroEntero < 0) {
    console.warn("Por favor, introduzca un número válido mayor o igual a 0.");
} else {
    // Mostramos la tabla de multiplicar del número ingresado
    console.log(`Tabla de multiplicar del ${numeroEntero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroEntero} x ${i} = ${numeroEntero * i}`);
    }
}