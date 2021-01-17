'use strict'

/**
 * ********** SWITCH **********
 */
var edad = 75;
var imprime = "";

switch(edad) {
  case 18: 
    imprime = "Acabas de cumplir la mayoría de edad";
    break;
  case 25: 
    imprime = "Acabas de terminar la universidad";
    break;
  case 75:
    imprime = "Disfruta tu jubilación";
    break;
  default:
    imprime = "Nada que decirte";
    break;
}
console.log(imprime);