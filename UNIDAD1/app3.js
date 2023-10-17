
//typeof
const num=20;
console.log("El tipo es: "+typeof num);

//NaN
const variable = 4 * "hola";
console.log(variable);
console.log("El tipo de variable es: "+variable);

//Infinity
const division = 4/0;
console.log(division);
console.log("El tipo de division es: "+typeof division)
//isNaN
const numberstring="30";
const string="20 años";
console.log("isNaN");
console.log(isNaN(variable));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));
//toString
const numberString = 100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());
//toFixed
console.log(number.toFixed(4));

//realizar un script que calcule cuato toca pagar a cada persona que cuesta 200 euros y asistieron 6 personas

const total=200;
const personas=6;
const cada1 = total / personas;
console.log("Total a pagar cada persona: "+cada1)


//Funcion Boolean devuelve verdadero
console.log(Boolean(200));
console.log(Boolean("cosa"));
console.log(Boolean(3.14));
console.log(Boolean(100>5));
console.log(Boolean('1'==1));
//Funcion Boolean devuelve falso
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('1'===1));
console.log(Boolean(undefined));