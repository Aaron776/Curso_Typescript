// Los Namespaces son otra de las características habituales de los lenguajes de programación que podemos tener en javaScript gracias a typeScript. Se parecen mucho a los módulos -de hecho, hasta la versión 1.5 de ts se conocían como «módulos internos» y cumplen una función similar: agrupar y encapsular partes del código con la misma funcionalidad que los modulos.

// Para definir una namespace usamos la palabra namespaces nseguido de un nombre cualquiera, ademas para que cualquier otro archivo pueda utilizar este namespacedebemos usar la palabra export antes de declarar una variable o una funcion
namespace Utilidad{
    export let nombre: string = "Juan";
    export let apellido: string = "Perez";
    export let edad: number = 30;


     export function saludar(){
        console.log("Hola Mundo");
    }

    saludar();

    export function calcularIva(precio:number){ // Para definir una funcion dentro de un namespace se usa la palabra function seguido del nombre de la funcion y dentro de los parentesis se definen los parametros que va a recibir la funcion
         return precio * 1.21;
    } 

    console.log("El precio con iva es: " + calcularIva(100));
}