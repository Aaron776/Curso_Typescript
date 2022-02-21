//Al igual que en Jvascript y otros lenguajes de programación, en TypeScript también se puede declarar arreglos que vienen a ser un conjunto de elementos o valores.
let numeros=[1,2,3,4,5]
let nombres=["Aaron","Juan","Pedro","Ricardo","Jorge"]
let tipos=[true,false,true,false,true]
let mezcla=[1,"Pedro",true,2.5,false]
console.log(numeros)
console.log(nombres)
console.log(tipos)
console.log(mezcla)


// En typeScript se puede declarar un arreglo poniendo de que tipo va a ser ese arreglo (:string,:number,:boolean,:any). 
let arregloNumeros:number[]=[1,2,3,4,5]
let arregloNombres:string[]=["Aaron","Juan","Pedro","Ricardo","Jorge"]
let arregloTipos:boolean[]=[true,false,true,false,true]
let arregloMezcla:any[]=[1,"Pedro",true,2.5,false]


// Para poder recorrer un arreglo podemo usar un ciclo for o for in o un for of.
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

for(let item in nombres){
    console.log(nombres[item])
}

for(let item of mezcla){
    console.log(item)
}