/* PRUEBAS Y CURSO LET VS VAR */

// Modo estricto -- Programación con mejores prácticas y activa nuevas funcionalides
'use strict'

//PRUEBA CON VAR (VARIABLE GLOBAL)
var numero=40;
console.log(numero);
if (true){
  var numero=50;
  console.log(numero);
}
console.log(numero);

//PRUEBA CON VAR (VARIABLE GLOBAL)
var texto="Curso JS";
console.log(texto);
//la variable let solo afecta al nivel del bloque if
if (true){
  let texto="Curso modificado JS";
  console.log(texto);
}
console.log(texto);