// Los enums en TypeScript sirven para definir un tipo de datos con un conjunto de valores identificables. Estos valores pueden ser utilizados en forma de constantes para asignar como valor a variables, realizar comprobaciones en sentencias de decisión, para definir un enum usamos la palabra enum
enum Roles {
    usarios="Usuarios",
    administradores="admin",
    moderadores="moderador"
}
console.log(Roles.administradores); 

// Para imprimir un enum podemos hacer con un for in
for (let item in Roles) {
    console.log(item);
}

                                    //Ejemplo de Enum

enum Color {
    Rojo = "Rojo",
    Verde= "Verde",
    Azul= "Azul"
};

// Una vez definido el enumerado podemos utilizarlo como tipo de dato a la hora de definir una variable.
let miColor:Color; // aqui especifico que mi bariable sera del tipo enum Color
let c:Color = Color.Rojo;
console.log(c);