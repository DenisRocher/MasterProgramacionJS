'use strict'

/** 
 * Iterador WHILE // DO WHILE
 * 
 * Menos estricto que for
 * 
 * 
*/

var year = 2021;

while (year != 1974) {
  console.log("Estamos en el año " + year);  
  //year++;
  if (year == 2000) {
    break;  }
  year--;
}

// DO WHILE
// PRIMERO EJECUTA BLOQUE DE INSTRUCCIONES, LUEGO VALIDA
var years = 30;
do {
  alert("solo cuando sea diferente a 20");
  years--;
} while (years > 25);
