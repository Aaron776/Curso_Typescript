// Las funciuones felcha son una forma de reducir codigo al crear una funcion de
 
// Función tradicional
function suma (a){
    return a + 100;
  }
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  a => a + 100;



 
//Ejemplo de funcion flecha con argumentos en los parentesis
  let sumar=(a:number,b:number)=>{
     return "El resultado es: "+(a+b)
 }
 console.log(sumar(3,6));


 //Ejemplo de funcion flecha sin argumentos  en los parentesis
 let resta=()=>{
     return 24-8
 }

 console.log(resta());

 
 //Ejemplo de funcion flecha sin llaves escrita solo en una linea ( solo se debe hacer cuando tendremos una linea de codigo solo ahi se quitan las llaves y no se pone un return)
 let multiplicacion=(a:number,b:number)=>a*b;
 console.log(multiplicacion(3,7))