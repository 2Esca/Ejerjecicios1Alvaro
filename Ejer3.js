// Solicitamos al usuario los datos necesarios y almacenamos en variables
const nombre = prompt("Introduzca su nombre:").trim();
const curso = prompt("Introduzca el nombre del curso:").trim();
const localidad = prompt("Introduzca la localidad:").trim();
const fechaInicio = prompt("Introduzca la fecha de inicio del curso:").trim();
const fechaFin = prompt("Introduzca la fecha de finalización del curso:").trim();

// Creamos la carta personalizada reemplazando los datos ingresados por el usuario
const cartaPersonalizada = `
Estimado ${nombre}, 

Bienvenido al curso de ${curso} que se celebrará en la localidad de ${localidad} entre las fechas ${fechaInicio} y ${fechaFin}. Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle 

Atentamente,  
La dirección.
`;

// Mostramos la carta en el documento
document.write(cartaPersonalizada);