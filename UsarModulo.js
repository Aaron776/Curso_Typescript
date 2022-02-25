"use strict";
// Para usar un modulo en otro archivo debemosar importarlo con la palabra import luego ponemos llave y dentro de las llevaes ponemos el nombre de las variables o funciones que quermeos importar en este archivo y usamos la palabra from para especificar la ruta de ese otro archivo o modulo que queremos usar
exports.__esModule = true;
var Modulos_1 = require("./Modulos");
console.log(Modulos_1.nombre);
console.log((0, Modulos_1.numeroAleatorio)()); // aqui se llama a la funcion numeroAleatorio del modulo Modulos.ts
var usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};
console.log(usuario);
