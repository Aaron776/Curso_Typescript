// Las tuplas son parecidos a los arreglos o arrays ya que son un conjunto de elementos y est os elementos son inmutables, que tienen una relación y que se pueden usar para devolver varios valores a otras funciones
// En una tupla debemos especificar los tipos de valores que tendra nuestra tupla, la tupla es muy similar a un array con la diferencia que en un tuple podemos controlar/definir el tipo de dato que introducimos para cada uno de los elementos de dicho array.
let jugadores: [string, number, boolean] = ["Messi", 10, true];



//Tupla de arrays
let jugadores2: [string, number, boolean][] = [["Messi", 10, true], ["Cristiano", 10, true]];


// En una tupla podemos acceder a los valores de la tupla mediante su indice
console.log(jugadores[0]);
console.log(jugadores2[1]);
console.log(jugadores2[1][0]); // aqui especifico el indice del array y el indice del valor dentro del array al que quiero acceder en la tupla tipo array