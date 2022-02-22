// El objeto en TypeScript nos permite definir tipos de datos personalizados con la composición de nuestra elección. Hay dos formas en que podemos crear un objeto en TypeScript. Uno está usando el nuevo constructor Object () y otro es usar las llaves {}
// Un objeto se componete de atributos y valores, primero va el nombre del atributo y luego el valor.
var Planet = {
    name: "Tierra",
    galaxy: "Milky Way",
    numberOfMoons: 1,
    weight: 5.9736 * Math.pow(10, 24)
};
console.log(Planet); // aquio imprimo todo el objeto
console.log(Planet.name); // aqui imprimo el valor del atributo name
