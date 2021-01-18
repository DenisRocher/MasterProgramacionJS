'use strict'

/**
 * 
 * PARAMETROS REST Y SPREAD
 *  PARAM REST
 *    '...' antes del nombre del parametro crea un array indefinido para
 *          contener todas las variables necesarias.
 *  
*/

function listadoFrutas(fruta1, fruta2, ...arrayparametros) {
  console.log("Fruta 1 es: " + fruta1);
  console.log("Fruta 2 es: "+ fruta2);
  console.log(arrayparametros);
}

listadoFrutas ("Pera", "Manzana", "Sandia", "Platano", "De todo");

var frutas = ["Sandia", "Platano", "De todo"];
console.log('Segunda invocacion con var frutas en array ...array == PARAM SPREAD');
listadoFrutas (...frutas, "Pera", "Manzana");
