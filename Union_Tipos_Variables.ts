// En Typescript podemos unir varios tipos de datos en una sola variable 
                                            //Tipos
//union: los tipos de datos unión son un tipo peculiar, ya que nos permiten trabajar con varios tipos de datos que nosotros especifiquemos sobre una variable.

let edad:number|string|boolean; // en este caso la variable edad puede ser un numero, un string o un boolean
edad = 20;
edad = "25";
edad = true;


function saludar(hola:string|boolean){
    return (hola)
}

console.log(saludar("Aaron"))
console.log(saludar(false))