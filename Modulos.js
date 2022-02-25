"use strict";
/*
Los módulos permiten agrupar código, Consiste en agrupar todo (funciones, clases, variables) dentro de modulo y luego exportarlo para que pueda ser utilizado en otro archivo
 Toda variable, clase, interface o funcion que tenga la palabara export o import se convierte en modulo
*/
exports.__esModule = true;
exports.numeroAleatorio = exports.apellido = exports.nombre = void 0;
exports.nombre = "Juan";
exports.apellido = "Perez";
function numeroAleatorio() {
    return (Math.random() * 100);
}
exports.numeroAleatorio = numeroAleatorio;
