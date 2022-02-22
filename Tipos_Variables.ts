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

//Any: es un tipo de dato que puede ser cualquier tipo de dato
let cualquiera1:any=5


//undefined: en JS normal, cuando una variable no tiene un valor establecido, se establece undefined como valor (es decir, no definido). En cambio, en TS, aunque también se establece undefined como valor hay que recordar que este tipo de dato no podrá cambiar y, por tanto, no podrá ser diferente a undefined. Se suele trabajar con undefined principalmente cuando declaramos que una variable trabajará con el tipo de dato any  ya que si no, nunca podrá cambiara otro valor que no sea undefined. O cuando queremos trabajar con un String sin darle valor, etc.
const valor3=undefined

// null: vacío (definido como vacío). Pasa lo mismo que con undefined, no puede cambiar a otro valor que no sea null. Por tanto, se suele utilizar cuando hemos declarado un tipo de dato como any ya que sino no tiene sentido ya que nunca podrá cambiar.
const valor4=null

//object:  es el tipo de dato que engloba a la mayoría de los no primitivos.
let persona:object={nombre:"Aaron",apellido:"Garcia",edad:23}

// Ademas en typescrit podemos precesiar el tipo de variable que queremos declarar usando los dos puntos y poniendo el tipo de valor que sera esa variable (:string,:number,:boolean)
let apellido:string="Aaron"
let edad:number=45
let casado:boolean=false
let cualquiera:any=67.90 //Any: quiere decir que acepta cualquier tipos de dato
let valor5:undefined=undefined
let valor6:null=null
console.log(apellido)
console.log(edad)
console.log(casado)
console.log(cualquiera)
console.log(valor5)
console.log(valor6)
console.log(persona) // para acceder al valor de un atributo de un objeto se utiliza la notacion de primero el nombre del objeto luego punto seguido del nombre del atributo al que queremos acceder.

