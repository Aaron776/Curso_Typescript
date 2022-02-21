// Al igual que en Jvascript y otros lenguajes de programación, en TypeScript también se puede declarar variables de distintos tipos.
 
//String: cadema de texto
let nombre="Aaron"
console.log(nombre)

//Number:numeros tanto enteros como decimales
var numero1=45
let numero2=5.7
console.log(numero1)
console.log(numero2)

// Boolean: son los valores true o false
const valor=true
const valor2=false
console.log(valor)
console.log(valor2)



// Ademas en typescrit podemos precesiar el tipo de variable que queremos declarar usando los dos puntos y poniendo el tipo de valor que sera esa variable (:string,:number,:boolean)
let apellido:string="Aaron"
let edad:number=45
let casado:boolean=false
let cualquiera:any=67.90 //Any: quiere decir que acepta cualquier tipos de dato
console.log(apellido)
console.log(edad)
console.log(casado)
console.log(cualquiera)

