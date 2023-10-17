/*Estructura del condicional */
const flight = 100;
const hotel = 50;
const tour = 30;
const total = flight+hotel+tour;
const budget = 300;

if(budget > total){
    console.log('Si me voy de putas y barcos');
}else if(budget === total){
    console.log('Si me voy de putas pero sin barcos')
}else{
    console.log('Me hago una gallola en mi casa triste');
}

/* OPERADORES TERNARIOS */
const result = budget > total ? console.log('Si me vengo'):console.log('No me vengo');