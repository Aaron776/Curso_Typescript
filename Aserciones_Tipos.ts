// Las aserciones de tipos en typescrit es un mecanismo para 'convertir' los tipos de datos de una variable en algo que conocemos
// Hay dos formas de hacer las aserciones de tipos


// Forma 1: usando los los signos de mayor y menor y dentro de ellos poner el tipo de dato al cual queremos convertir
let nombre:any="Aaron"
let asercion=<string>nombre;
console.log("La variable dice "+asercion+" y el tipo de dato es "+typeof asercion);


// Forma 2: usando el operador de asercion as y luego poenmos el tipo de dato que queremos convertir
let nombre2:any="Patricio"
let asercion2=nombre2 as string;
console.log("La variable dice "+asercion2+" y el tipo de dato es "+typeof asercion2);



// Puede ser usado cuando recibimos datos de un input y no sabermos que tipo de dato es entonces ahi nosotros especificamos que tipo de dato sera
const numero=document.getElementById("edad") as HTMLInputElement;
