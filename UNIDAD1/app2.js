//El alcance de las variables
//var es accesible desde cualquier scope
//let y const solo son visibles desde el scope definido
//const no puede modificar su valor
let adios = "Hasta el viernes";
const algo = "algo";
if (true){
    var hola = "Hello,";
}
console.log("var: "+hola);
console.log("let: "+adios);
console.log("const: "+algo);

adios= "Sayonara baby";
console.log("let"+adios);

