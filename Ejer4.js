// Solicitamos al usuario su dirección de correo electrónico
const email = prompt("Introduzca su dirección de correo electrónico:").trim();

// Dividimos la dirección de correo electrónico en dos partes: nombre de usuario y dominio
const partes = email.split("@");

// Comprobamos si hay al menos dos partes (nombre de usuario y dominio)
if (partes.length >= 2) {
    // Obtenemos el nombre de usuario (lo que va antes de la "@") y eliminamos espacios en blanco
    const nombreUsuario = partes[0].trim();
    
    // Mostramos el nombre de usuario al usuario
    alert(`Su nombre de usuario es: ${nombreUsuario}`);
} else {
    // Si no hay al menos dos partes, mostramos un mensaje de error
    alert("La dirección de correo electrónico no es válida.");
}