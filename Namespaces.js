// Los Namespaces son otra de las características habituales de los lenguajes de programación que podemos tener en javaScript gracias a typeScript. Se parecen mucho a los módulos -de hecho, hasta la versión 1.5 de ts se conocían como «módulos internos» y cumplen una función similar: agrupar y encapsular partes del código con la misma funcionalidad que los modulos.
// Para definir una namespace usamos la palabra namespaces nseguido de un nombre cualquiera, ademas para que cualquier otro archivo pueda utilizar este namespacedebemos usar la palabra export antes de declarar una variable o una funcion
var Utilidad;
(function (Utilidad) {
    Utilidad.nombre = "Juan";
    Utilidad.apellido = "Perez";
    Utilidad.edad = 30;
    function saludar() {
        console.log("Hola Mundo");
    }
    Utilidad.saludar = saludar;
    saludar();
    function calcularIva(precio) {
        return precio * 1.21;
    }
    Utilidad.calcularIva = calcularIva;
    console.log("El precio con iva es: " + calcularIva(100));
})(Utilidad || (Utilidad = {}));
