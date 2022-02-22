// Los enums en TypeScript sirven para definir un tipo de datos con un conjunto de valores identificables. Estos valores pueden ser utilizados en forma de constantes para asignar como valor a variables, realizar comprobaciones en sentencias de decisión, para definir un enum usamos la palabra enum
var Roles;
(function (Roles) {
    Roles["usarios"] = "Usuarios";
    Roles["administradores"] = "admin";
    Roles["moderadores"] = "moderador";
})(Roles || (Roles = {}));
console.log(Roles.administradores);
// Para imprimir un enum podemos hacer con un for in
for (var item in Roles) {
    console.log(item);
}
//Ejemplo de Enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
;
// Una vez definido el enumerado podemos utilizarlo como tipo de dato a la hora de definir una variable.
var miColor; // aqui especifico que mi bariable sera del tipo enum Color
var c = Color.Rojo;
console.log(c);
