/*
Un módulo es un archivo de código fuente independiente entre sí. Con la palabra clave export, podemos explicarle a Node que un elemento de uno de los archivos, como una función, una clase, o la declaración de un tipo o una interfaz, debería estar disponibles para otros módulos que quieran importarlo y así reutilizar código.
*/
// Para exportar un modulo usamos la palabara export 

export type almacen={
    precio:string,
    cantidad:number,
    nombre:string
}

export interface cedula{
    nombre:string,
    apellido:string,
    casado:boolean
}

export function saludar(nombre:string){
    console.log("Hola "+nombre)
}