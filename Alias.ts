// El tipo alias es una funcion de typescript que crear un tipo de dato de dato que podra ser usado en cualquier variable para que sea de ese mismo tipo de dato de dato
// para crear yn tipo alias se usa la plabara type seguido de un nombre y lo igualamos al tipo de dato que queremos que sea

type numeroCualquiera=number;

// Una vez creado el alias podemos usarlo en las variables para especificar de que sera de ese tipo de dato del alias
 let numero1:numeroCualquiera=7 // es algo parecido a una interface cuando tipamos de que sera de ese mismo tipo de dato y no hace falta ponder de que tipo de dato sera
 let numero2:numeroCualquiera=8.9

 
 // Igual podemos crear funciones que use ese tipado de alias

 function sumar(a:numeroCualquiera,b:numeroCualquiera):numeroCualquiera{
    return a+b
}

console.log("El resultado de la funcion sumar es: "+sumar(2,4))



 //POdemos crear un modelo de objeto de tipado parecido a una interface
 type CredencialesLogin={
     correo:string;
     contraseña:string;
 }

 let usuario1:CredencialesLogin={ // creamos un objeto del tipo del alias de CredencialesLogin con los datos que pide
     correo:"aronortiz90@yahoo.com",
     contraseña:"12345"
 }

 

 function crearUsuario(usuario2:CredencialesLogin){
     console.log("El correo es: "+usuario2.correo)
     console.log("La contraseña es: "+usuario2.contraseña)
 }

 // Llamado de la funcion
 crearUsuario({
     correo:"ralbansilva@yahoo.com",
     contraseña:"197364"
    })


// Union de Tipos de un alias: cuando una variable es de un tipo de alias o de otro
type Dueño={
    nombre:string,
    edad:number,
    cantidadDedos:number[]
}

type Perro={
    nombre:string,
    raza:string
    
}

type SuperPerro={
    dieta:string,
    datos:Dueño // en un alias una variable puede ser del tipo de otro alias
    velocidadCaza:number
}

let firulais:Perro|SuperPerro={ // aqui especifico que la variable firulais puede ser del tipo Perro o SuperPerro cualquiera de los dos 
    nombre:"Firulais",
    raza:"Snauser",
}

console.log(firulais)


// Interseccion de Alias: cuando una variable es del tipo de variaos alias
let mickey:Perro & SuperPerro={ // aqui especifico que la variable mickey tendra los campos o variables de los dos alias y por tanto debe llenarse con las variables de los dos alias
    nombre:"Mickey",
    raza:"frenchpudole",
    velocidadCaza:45,
    dieta:"Vegetariano",
    datos:{
        nombre:"Aaron",
        edad:23,
        cantidadDedos:[1,2,3,4,5]
    }

}

console.log("Su nombre es "+mickey.nombre+", su raza es "+mickey.raza+", su velocidad para es cazar es "+mickey.velocidadCaza+" km/h y el primer numero de dedo es "+mickey.datos.cantidadDedos[0])




 