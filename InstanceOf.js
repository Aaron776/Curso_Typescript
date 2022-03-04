// instanceof es una palabra clave de JavaScript que hereda TypeScript que permite comprobar si un objeto es de una clase concreta.
// Utilice instanceof cuando necesite confirmar el tipo de un objeto
var Animal = /** @class */ (function () {
    function Animal(especie, dieta, cantidadPatas) {
        this.especie = especie;
        this.dieta = dieta;
        this.cantidadPatas = cantidadPatas;
    }
    Animal.prototype.comprobarEspecieDieta = function () {
        console.log("La especie es: " + this.especie + " y es " + this.dieta);
    };
    return Animal;
}());
var leon = new Animal("felino", "carnivoro", 4);
leon.comprobarEspecieDieta();
leon.especie = "ave"; // si el valor de una propiedad es diferente al valor que ponemos en el constructor este nuevo valor lo remplazara esto quiere decir que los valor del contructor no son para siempre solo son para inicalizar el objeto y si queremos podemos cambiarles
leon.comprobarEspecieDieta();
console.log(leon instanceof Animal); // aqui con el instance of verifico si el objeto que cree es de una lcase en especifico o no, esto devuleve un true si es verdadero y un flase si es falso
