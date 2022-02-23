// En typescrit podemos crear funciones muy parecidad a como lo hacemos en javascript, como sabemos las funciones pueden recibir parametros dentro de los parentesis y podemos usar la palabra return para devolver algo
function saludar(nombre:string){
    console.log("Hola Mundo mi nombre es: "+nombre);
}

function despedir(){
    console.log("Adios Mundo");
}

function sumar(num1:number,num2:number){
    return num1+num2;
}


// En typescript podemos especificar el tipo de dato que nos deolvera la funcion como resultado usando los dos puntos luego del parentesis y poner el tipo de dato que nos devolvera
function restar():number{
let numero1=23
let numero2=5
return numero1-numero2;
}

// En typescript podemos usar usar lo del union type (|) para especificar que tipo de dato podra ser la variable
function ruta(nombre:string|number){
    console.log("Mi ruta es: "+nombre);
}

// Igual debemos llamar a la funcion para que se ejeccute en pantalla o consol
saludar("Aaron Ortiz");
despedir();
console.log("El resultado de la suma es: "+sumar(5,16)); // si las funciones usan un return debemos ponerlo en console.log para imprimir el resultado
console.log("El resultado de la resta es: "+restar());
ruta("Calle 123");