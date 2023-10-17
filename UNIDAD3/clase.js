class Persona{
    constructor(nombre,apellido,year,ciudad,curso){
        this.nombre=nombre;
        this.apellido=apellido;
        this.year=year;
        this.ciudad=ciudad;
        this.curso=curso;
    }
    get annoNacimiento(){
        return this.year;
    }
}

const p1=new Persona("Juan", "Perez", "1990", "Toledo", "ESO");
const p2=new Persona("Ana", "Martinez", "1990", "Madrid", "ESO");

const Personas=(lista)=>{
    let contador=0;
    lista.forEach(elemento => {
        console.log(elemento.estudios());
        console.log(elemento.poblacion());
        contador++;
    })
    return contador;
}