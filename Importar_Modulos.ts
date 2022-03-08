// Una vez que vimos el funcionamiento de export, TypeScript también soporta la palabra clave import, procedente de ECMAScript 2015, con la que podemos importar desde otros módulos elementos que hayamos exportado previamente usando export, para poder referenciar las funciones, constantes y tipos declarados en esos archivos.
// Para importar un modulo de un archivo diferente usamos la plabara import pero antes hay que asugurase de que los elementos a importar esten con la plabara export para usar en este archivo de la

import {cedula} from './Exportar_Modulos'  // en la llaves del import ponemos el nombre del elemento (interface, funcion o variables) que quermeos importar y usar y en la comillas del from ponemos la direccion y el nombre del archivo en donde se encuentra el elemento que queremos importar
import{saludar} from './Exportar_Modulos' // aqui importo una funcion
let y:cedula={
    nombre:"",
    apellido:"",
    casado:true
}

function ejecutarCompra(x:cedula):cedula{
    x={
        nombre:"Aaron",
        apellido:"Ortiz",
        casado:false
    }
    return x

}

console.log(ejecutarCompra(y))
console.log(saludar("Patricio Alban"))