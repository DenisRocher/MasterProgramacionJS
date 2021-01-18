'use strict'

/**
 * INFORMA SI UN NUMERO ES PAR O IMPAR.
 * 1. VENTANA PROMPT
 * 2. VALIDA QUE SE NUMERO
 * 3.  
 * 
 */

var numero = parseInt(prompt("Introduzca un número", 0));

while (isNaN(numero)) {
 alert("Favor introducir un numero");
 numero = parseInt(prompt("Introduce un número",1));
 //numero2 = parseInt(prompt("Introduce el segundo número",0));
}

if (numero%2 ==0) {
  document.write("El numero: "+numero+" es un numero par </BR>");
  }
  else {
  document.write("El numero: "+numero+" es un numero impar </BR>");
  }