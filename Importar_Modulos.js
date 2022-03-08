"use strict";
// Una vez que vimos el funcionamiento de export, TypeScript también soporta la palabra clave import, procedente de ECMAScript 2015, con la que podemos importar desde otros módulos elementos que hayamos exportado previamente usando export, para poder referenciar las funciones, constantes y tipos declarados en esos archivos.
// Para importar un modulo de un archivo diferente usamos la plabara import pero antes hay que asugurase de que los elementos a importar esten con la plabara export para usar en este archivo de la
exports.__esModule = true;
var Exportar_Modulos_1 = require("./Exportar_Modulos"); // aqui importo una funcion
var y = {
    nombre: "",
    apellido: "",
    casado: true
};
function ejecutarCompra(x) {
    x = {
        nombre: "Aaron",
        apellido: "Ortiz",
        casado: false
    };
    return x;
}
console.log(ejecutarCompra(y));
console.log((0, Exportar_Modulos_1.saludar)("Patricio Alban"));
