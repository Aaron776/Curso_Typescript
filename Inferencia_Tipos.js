// Inferencia de tipos  en typescrit quiere decir será TypeScript el encargado de asignar un tipo de dato a una variable dependiendo del valor inicial que le asignemos a dicha variable.
//Tipos
//Inferencia de tipos (sin definir un tipo de dato): establecerá el tipo de dato como any (cualquier tipo de dato será válido).
var numero; // Si situamos el cursor sobre el tipo de dato podremos ver que es de tipo any
//Inferencia de tipos con valor: establecerá el tipo de dato (haciendo un typeof para obtener el tipo) sobre el valor que asignemos a dicha variable
var nombre = "Juan"; // Si situamos el cursor sobre el tipo de dato podremos ver que es de tipo string
console.log(typeof nombre);
// Anotación de tipo: somos nosotros los que especificamos a TypeScript el tipo de dato con el que vamos a trabajar sobre una variable.
var edad = 23; // Si situamos el cursor sobre el tipo de dato podremos ver que es de tipo number
console.log(typeof edad);
