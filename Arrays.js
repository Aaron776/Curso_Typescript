//Al igual que en Jvascript y otros lenguajes de programación, en TypeScript también se puede declarar arreglos que vienen a ser un conjunto de elementos o valores.
var numeros = [1, 2, 3, 4, 5];
var nombres = ["Aaron", "Juan", "Pedro", "Ricardo", "Jorge"];
var tipos = [true, false, true, false, true];
var mezcla = [1, "Pedro", true, 2.5, false];
console.log(numeros);
console.log(nombres);
console.log(tipos);
console.log(mezcla);
// En typeScript se puede declarar un arreglo poniendo de que tipo va a ser ese arreglo (:string,:number,:boolean,:any). 
var arregloNumeros = [1, 2, 3, 4, 5];
var arregloNombres = ["Aaron", "Juan", "Pedro", "Ricardo", "Jorge"];
var arregloTipos = [true, false, true, false, true];
var arregloMezcla = [1, "Pedro", true, 2.5, false];
// Para poder recorrer un arreglo podemo usar un ciclo for o for in o un for of.
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
for (var item in nombres) {
    console.log(nombres[item]);
}
for (var _i = 0, mezcla_1 = mezcla; _i < mezcla_1.length; _i++) {
    var item = mezcla_1[_i];
    console.log(item);
}
