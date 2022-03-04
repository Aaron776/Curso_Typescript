var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Un clase en typscrit es muy aprecido a los otros lenguajes de programacion, las clases sriven para ordenar el codigo de la clasen una lcase tiene atributos y metodos o funciones
// Para declarar una clase usamos la plabara class seguyido de un nombre de la llave y entre las llavaes ponemos el cofdigo que querramos
// Toda clase que creamos debe tener un metodo constructor
var Empleado = /** @class */ (function () {
    //Constructor: Nos sirve para cuando vayamos a crear un un objeto de la clase nos permite inicializar los valores con los cuales la clase va a trabajar
    function Empleado(id, nombre, apellido, areaTrabajo, sueldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.areaTrabajo = areaTrabajo;
        this.sueldo = sueldo;
    }
    //Metodos 
    Empleado.prototype.saludar = function () {
        console.log("Hola " + this.nombre + " su id es " + this.id); // en una clase para acceder o utilizar a un atributo o a un metodo usamos la aplabra this
    };
    Empleado.prototype.mostrarApellido = function () {
        return this.apellido;
    };
    Empleado.prototype.sueldoTotal = function () {
        console.log("Su sueldo actual es: " + (this.sueldo + 100));
        console.log("Su apellido es: " + this.mostrarApellido());
    };
    Empleado.prototype.informacion = function () {
        console.log("Su area de trabajo actual es: " + this.areaTrabajo);
    };
    return Empleado;
}());
// Para crear un objeto de la clase lo creamos como si fuera una varriable dandole un nombre  y luego instaciamos a la calse a la cual va a pertenecer
var empleado1 = new Empleado('1', 'Aaron', 'Ortiz', 'Tesoreria', 2000);
// Una vez creado ese obejto este podra acceder a los atributos y a los metodos de esa clase
empleado1.saludar();
empleado1.informacion();
empleado1.sueldoTotal();
// Extension de Clases es cuando una clase hereda  los atributos o metodos de otra clase o sea que puede usar esos atributos o metodos
var Persona = /** @class */ (function (_super) {
    __extends(Persona, _super);
    function Persona() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(){  // cuando se crea un constructor en una clase que se extiende de otra clase se debe crear un metodo super con los datos del contructor de la otra clase
        super("2","Patricio","Alban","Economia",1000)
    }*/
    Persona.prototype.despedir = function () {
        console.log("Me despido de ti " + this.nombre);
    };
    return Persona;
}(Empleado));
var persona1 = new Persona("2", "Patricio", "Alban", "Economia", 1000); // como esta clase Persona es una extension de la clase Empleado el constructor de esta va a ser la misma que en la clase Empleado por ende cuando creemos un objeto de esta clase Persona tendremos que llenar los datos enn el parentesis con el cotructor de la clase Empleado
persona1.despedir();
var matrimonio = /** @class */ (function () {
    function matrimonio(fechaExp, estadoCivil, numeroHijos) {
        this.fechaExp = fechaExp;
        this.estadoCivil = estadoCivil;
        this.numeroHijos = numeroHijos;
    }
    matrimonio.prototype.fechaDeExpiracionMatrimonio = function () {
        console.log(this.fechaExp);
    };
    matrimonio.prototype.cantidadHijosADesear = function (numeroHijosQuisiera) {
        console.log(numeroHijosQuisiera - this.numeroHijos);
    };
    return matrimonio;
}());
var matrimonio1 = new matrimonio("12/01/12", "casado", 5);
matrimonio1.cantidadHijosADesear(7);
matrimonio1.fechaDeExpiracionMatrimonio();
