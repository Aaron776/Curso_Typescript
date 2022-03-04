/* Una interface en typescript son modelos que construimos de datos para que puedan ser usadas son algo muy parecidas a las clases en otros lenguajes de programacion
Una interface permite definir la forma de la data con la que vamos a trabajar
*/

// Para definir una interface en typescript se usa la palabra interface seguida del nombre de la interface y seguido de las llaves y dentro de las llaves se definen los atributos que va a tener la interface y de que tipo de dato van a ser, ademas en las interfaces podemos crear funciones o metodos
interface Persona{
    nombre?:string; // ? significa que este atributo es opcional
    apellido:string;
    edad:number;
    direccion:string;
    mascotas?:string[]; // un campo pude ser un arreglo de un tipo de dato en una interface
}

// Tambien podemos tener otra interface en la que un campo como tipo de dato sea una interface que anteriormete hayamos crerado
interface LicenciaConducir{
    fechaExpiracion:string;
    lugarNacimiento:string;
    datosPersonales:Persona; // Aqui podemos definir un campo que sera de tipo interface dentro de otra interface o sea que tendra los atrobutos de esa interface
}

var licencia1:LicenciaConducir={
    fechaExpiracion:"21/11/21",
    lugarNacimiento:"Quito",
    datosPersonales:{
        nombre:"Aaron",
        apellido:"Ortiz",
        edad:25,
        direccion:"El Valle de los Chillos",
        mascotas:["snoopy","Toby"]
    }

}


// Una vez definido la interface podemos crear una variable o un objeto del tipo de la interface que creamos y ese obejto podra tener los atributos de la interface que definimos anteriormenete, el obejto que es del tipop de una interface debe tener todos los atributos de esa interface para que no haya errores
let persona:Persona = {
    nombre:"Juan", 
    apellido:"Perez", 
    edad:25, 
    direccion:"Calle 123"
}


//Herencia de Interfaces
// Tambien podemos crear una intergace la cual se extienda o tenda los atributos de otra interface de la interface
interface Cedula extends Persona{ // Esta interface hereda los atributos de la interface Persona esto quiere decir que si creamos un objeto de esta interface tendra que tener los atributos de la interface Persona y los atributos de esta otra interface
    ci:string
}

let cedula1:Cedula = {
    ci:"1725159684",
    nombre:"Fernando",
    apellido:"Fuertes",
    edad:25,
    direccion:"El Triangulo",
}





//Igualemnte podremos crear arreglos de un tipo de interface
    let personas:Persona[] = [
        {
            nombre:"Juan",
            apellido:"Perez",
            edad:25,
            direccion:"Calle 123"
        },
        {
            nombre:"Pedro",
            apellido:"Ortiz",
            edad:25,
            direccion:"El Valle de los Chillos"
        }
    ]


// Podemos reccorrer un arreglo de un tipo de interface con un forEach o un for in u un for of
personas.forEach(x => {
    console.log(x) // imprime todo el objeto
    console.log(x.nombre) // aqui imprimo el valor del campo nombre
    console.log(x.apellido) // aqui imprimo el valor del campo apellido
    
})

for(let item in persona){
    console.log("Los valores del objeto persona son: "+persona[item])
}

for(let item of personas){ // el for of es usado para recorrer un arreglo de obejtos unicamente y no se deja usar para recorrer un solo objeto
    console.log(item) // imprimo todo el objeto
    console.log(item.nombre) // imprimo el valor del campo nombre
}

for(let item in licencia1){
    console.log("Los valores del objeto licencia1 son: "+licencia1[item])
    
}


// Igualmente podemos crear funciones que devuelva o retorne una variable del tipo de interface que creamos o retorne un objeto de ese tipo de interface
function crearPersona():Persona{
    return {
        nombre:"Raul",
        apellido:"Moya",
        edad:25,
        direccion:"El Triangulo"
    }
}

function sujeto():Persona{
    let persona:Persona={
        nombre:"Julio",
        apellido:"Jaramillo",
        edad:45,
        direccion:"Carapungo"
    }
    return persona
}


// Aqui imprimo el valor de la funcion que creamos
console.log(crearPersona())
console.log(sujeto())