'use strict'

function holaMundo(texto) {
  var hola_mundo = "Texto dentro de funcion"; // Es variable de ambito local
  console.log(texto); 
  console.log(typeof numero.toString());

  console.log(hola_mundo); 
}

var numero = 12;
var texto = "Soy una variable global";
holaMundo(texto);
//console.log(hola_mundo);
