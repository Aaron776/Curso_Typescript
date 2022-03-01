/* Una interface en typescript son modelos que construimos de datos para que puedan ser usadas son algo muy parecidas a las clases en otros lenguajes de programacion
Una interface permite definir la forma de la data con la que vamos a trabajar
*/
// Una vez definido la interface podemos crear una variable o un objeto del tipo de la interface que creamos y ese obejto podra tener los atributos de la interface que definimos anteriormenete, el obejto que es del tipop de una interface debe tener todos los atributos de esa interface para que no haya errores
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    direccion: "Calle 123"
};
var cedula1 = {
    ci: "1725159684",
    nombre: "Fernando",
    apellido: "Fuertes",
    edad: 25,
    direccion: "El Triangulo"
};
//Igualemnte podremos crear arreglos de un tipo de interface
var personas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        direccion: "Calle 123"
    },
    {
        nombre: "Pedro",
        apellido: "Ortiz",
        edad: 25,
        direccion: "El Valle de los Chillos"
    }
];
// Podemos reccorrer un arreglo de un tipo de interface con un forEach o un for in u un for of
personas.forEach(function (x) {
    console.log(x); // imprime todo el objeto
    console.log(x.nombre); // aqui imprimo el valor del campo nombre
    console.log(x.apellido); // aqui imprimo el valor del campo apellido
});
for (var item in persona) {
    console.log(persona[item]);
}
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var item = personas_1[_i];
    console.log(item); // imprimo todo el objeto
    console.log(item.nombre); // imprimo el valor del campo nombre
}
// Igualmente podemos crear funciones que devuelva o retorne una variable del tipo de interface que creamos o retorne un objeto de ese tipo de interface
function crearPersona() {
    return {
        nombre: "Raul",
        apellido: "Moya",
        edad: 25,
        direccion: "El Triangulo"
    };
}
function sujeto() {
    var persona = {
        nombre: "Julio",
        apellido: "Jaramillo",
        edad: 45,
        direccion: "Carapungo"
    };
    return persona;
}
// Aqui imprimo el valor de la funcion que creamos
console.log(crearPersona());
console.log(sujeto());
