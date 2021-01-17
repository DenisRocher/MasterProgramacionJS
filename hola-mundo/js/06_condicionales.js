'use strict'

/********** USO DE CONDICIONALES  ************/
// IF
/**
 * Operadores relacionale
 * Mayor >
 * Menor <
 * Mayor o igual >=
 * Menor o igual <=
 * Igual ==
 * Distinto !=
 */
var edad = 36;
var nombre = "Denis Rocher";
if(edad >= 18){
  console.log(nombre + " es mayor de edad, tiene "+edad);
  if (edad == 33){
    console.log("Todavía eres millenial");
  }
  else if (edad >= 70) {
    console.log("Ya deberías disfrutar la vida de jubilado...");
  }
  else {
        console.log("Ya no eres millenial...");
  }
}
else {
  console.log(nombre + " es menor de edad, tiene "+edad);
}

/**
 * OPERADORES LÓGICOS PARA ANIDAR CONDICIONALES
 * 
 * AND  &&
 * OR   ||
 * NOT  !
 * 
 */
 var year = 2031;

 //Negación
 if (year != 2020) {
   console.log("El año no es 2020, es " + year);
 }

 //AND
 if (year >= 2000 && year <=2100) {
   console.log("Estamos en el siglo actual");
 }
 
 //OR
 if (year == 2001 || (year >=2021 && year == 2031)) {
   console.log("El año termina en 1")
 }
 else {
    console.log("El año no está registrado")
 }

 /**
  * SWITCH
  *   ANIDA ESTRUCTURA DE CONTROL  * 
  */