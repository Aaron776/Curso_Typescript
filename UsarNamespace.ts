/* Para utilizar una namespace que creamos anteriormete debemos importarlo en el archivo donde se va a utilizar 
usanado un triple slash seguido de los signos mayor y menor y dentro usamos la palabra reference y usamos el atributo path el cual contendra la direccion del archivo donde se encuentra el namespace
*/

///<reference path="Namespaces.ts" />
let Nombre=Utilidad.nombre; // para usar una variable o una funcion de una Nanmespace anteriormente creada debemos usar su nombre luego popnemos un punto y traemos la variable o funcion que queremos usar en este archivo
console.log(Nombre);

let calcular=Utilidad.calcularIva(50);
console.log(calcular);