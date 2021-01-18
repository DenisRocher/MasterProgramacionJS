'use strict'

/**
 * HACER UN SCRIPT QUE MUESTRE TODOS LOS NUMEROS ENTRE DOS NUMEROS CAPTURADOS
 */

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

while (numero1 > numero2 || numero1 == numero2 || isNaN(numero1) || isNaN(numero2)) {
 alert("Favor introducir un segundo numero mayor al primero")
 numero1 = parseInt(prompt("Introduce el primer número",0));
 numero2 = parseInt(prompt("Introduce el segundo número",0));
}

document.write("Los números en el intervalo entre "+numero1+" y " + numero2 +" son los siguientes: </BR>");   
for (let index = (numero1 + 1); index < numero2; index++) {
  document.write("El numero siguiente es: "+index+"</BR>");   
}