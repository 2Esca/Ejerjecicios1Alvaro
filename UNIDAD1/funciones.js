/*Funciones anonimas*/
let funccion=function(parametro){
    return parametro+":)";
}

console.log(funccion("HOLA"));

/*CALLBACK*/
function getIdentificacion(numero,letra,calback){
    let identificacion=callback(numero,letra);

    return identificacion;
}

let formatoNIF=function(numero,letra){
    return numero+"-"+letra
}

let formatoNIE=function(numero,letra){
    return letra+"-"+numero;
}

console.log(getIdentificacion("34389474","S",formatoNIF));

/*FORMA MAS UTILIZADA DE CALLBACKS*/

function getIdentificacion2(numero,letra,calback){
    let identificacion=callback(numero,letra);
    return identificacion;

}

getIdentificacion2("45674","R",function(numero,letra){
    console.log(numero+"-"+letra);
    return numero+"-"+letra;
});


/*FUNCIONES AUTOINVOCADAS*/
(function(numero,letra){
    console.log(numero+"-"+letra)
}("8394739","T"));