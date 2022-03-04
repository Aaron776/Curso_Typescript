// El tipo alias es una funcion de typescript que crear un tipo de dato de dato que podra ser usado en cualquier variable para que sea de ese mismo tipo de dato de dato
// para crear yn tipo alias se usa la plabara type seguido de un nombre y lo igualamos al tipo de dato que queremos que sea
// Una vez creado el alias podemos usarlo en las variables para especificar de que sera de ese tipo de dato del alias
var numero1 = 7; // es algo parecido a una interface cuando tipamos de que sera de ese mismo tipo de dato y no hace falta ponder de que tipo de dato sera
var numero2 = 8.9;
// Igual podemos crear funciones que use ese tipado de alias
function sumar(a, b) {
    return a + b;
}
console.log("El resultado de la funcion sumar es: " + sumar(2, 4));
var usuario1 = {
    correo: "aronortiz90@yahoo.com",
    contraseña: "12345"
};
function crearUsuario(usuario2) {
    console.log("El correo es: " + usuario2.correo);
    console.log("La contraseña es: " + usuario2.contraseña);
}
// Llamado de la funcion
crearUsuario({
    correo: "ralbansilva@yahoo.com",
    contraseña: "197364"
});
var firulais = {
    nombre: "Firulais",
    raza: "Snauser"
};
console.log(firulais);
// Interseccion de Alias: cuando una variable es del tipo de variaos alias
var mickey = {
    nombre: "Mickey",
    raza: "frenchpudole",
    velocidadCaza: 45,
    dieta: "Vegetariano",
    datos: {
        nombre: "Aaron",
        edad: 23,
        cantidadDedos: [1, 2, 3, 4, 5]
    }
};
console.log("Su nombre es " + mickey.nombre + ", su raza es " + mickey.raza + ", su velocidad para es cazar es " + mickey.velocidadCaza + " km/h y el primer numero de dedo es " + mickey.datos.cantidadDedos[0]);
