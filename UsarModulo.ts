// Para usar un modulo en otro archivo debemosar importarlo con la palabra import luego ponemos llave y dentro de las llevaes ponemos el nombre de las variables o funciones que quermeos importar en este archivo y usamos la palabra from para especificar la ruta de ese otro archivo o modulo que queremos usar

import {nombre,Persona,numeroAleatorio} from './Modulos';
console.log(nombre); 
console.log(numeroAleatorio()); // aqui se llama a la funcion numeroAleatorio del modulo Modulos.ts

const usuario:Persona={ // aqui importo mi interface
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}

console.log(usuario);