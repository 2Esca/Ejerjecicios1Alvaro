
//declaramos variable
let edad;

do {
    // Solicitamos al usuario que ingrese una edad y almacenamos el valor en la variable "edad"
    const edadInput = prompt("Introduzca su edad:");

    // Convertimos el valor ingresado a un número entero usando parseInt
    edad = parseInt(edadInput);

    // Verificamos si la edad ingresada es un NaN (no es un número válido)
    if (isNaN(edad)) {
        console.log("Por favor, introduzca una edad válida.");
    } else if (edad < 18) {
        console.log("Usted es menor de edad. Introduzca una edad mayor o igual a 18.");
    }
} while (isNaN(edad) || edad < 18);

// Cuando se ingrese una edad mayor o igual a 18, se mostrará el contenido en la consola
console.log(`¡Usted tiene ${edad} años y es mayor de edad!`);