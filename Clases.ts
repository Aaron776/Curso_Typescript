// Un clase en typscrit es muy aprecido a los otros lenguajes de programacion, las clases sriven para ordenar el codigo de la clasen una lcase tiene atributos y metodos o funciones
 // Para declarar una clase usamos la plabara class seguyido de un nombre de la llave y entre las llavaes ponemos el cofdigo que querramos
// Toda clase que creamos debe tener un metodo constructor
 class Empleado{
     
    //Atributos
     private id:string; // en todos los lenguaje de programacion exiten los modificadores de acceso que son pubic, procteted y private, si usamos el private e atributo o metodo solo podra ser accedido dentro de la clase mismo, por ejemplo un objeto creado fuera de la clase no podra usar o acceder ese metodo o atributo
     nombre:string;
     apellido:string;
     areaTrabajo:string;
     sueldo:number;

     //Constructor: Nos sirve para cuando vayamos a crear un un objeto de la clase nos permite inicializar
        constructor(id:string,nombre:string,apellido:string,areaTrabajo:string,sueldo:number){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.areaTrabajo=areaTrabajo;
            this.sueldo=sueldo;

        }

     

     //Metodos 
     saludar(){
         console.log("Hola "+ this.nombre+" su id es "+this.id); // en una clase para acceder o utilizar a un atributo o a un metodo usamos la aplabra this
     }

     private mostrarApellido():string{ // un metodo con el private solo podra ser usado en esta misma clase por ejemplo por otra funcion
         return this.apellido
     }

     sueldoTotal(){
         console.log("Su sueldo actual es: "+(this.sueldo+100))
         console.log("Su apellido es: "+this.mostrarApellido())
     }

     informacion(){
         console.log("Su area de trabajo actual es: "+this.areaTrabajo)
     }

 }


 // Para crear un objeto de la clase lo creamos como si fuera una varriable dandole un nombre  y luego instaciamos a la calse a la cual va a pertenecer
 var empleado1=new Empleado('1','Aaron','Ortiz','Tesoreria',2000)
 
 // Una vez creado ese obejto este podra acceder a los atributos y a los metodos de esa clase
empleado1.saludar()
empleado1.informacion()
empleado1.sueldoTotal()




// Extension de Clases es cuando una clase hereda  los atributos o metodos de otra clase o sea que puede usar esos atributos o metodos
class Persona extends Empleado{ 
    despedir(){
        console.log("Me despido de ti "+this.nombre)
    }

}

const persona1=new Persona("2","Patricio","Alban","Economia",1000) // como esta clase Persona es una extension de la clase Empleado el constructor de esta va a ser la misma que en la clase Empleado por ende cuando creemos un objeto de esta clase Persona tendremos que llenar los datos enn el parentesis con el cotructor de la clase Empleado
persona1.despedir() 
