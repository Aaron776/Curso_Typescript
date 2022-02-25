/* 
Los módulos permiten agrupar código, Consiste en agrupar todo (funciones, clases, variables) dentro de modulo y luego exportarlo para que pueda ser utilizado en otro archivo
 Toda variable, clase, interface o funcion que tenga la palabara export o import se convierte en modulo
*/

export let nombre = "Juan";
export let apellido = "Perez";

export interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

export function numeroAleatorio(){
    return (Math.random()* 100)
}
