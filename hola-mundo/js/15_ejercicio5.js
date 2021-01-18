'use strict'

/**
 * MOSTRAR TODOS LOS NUMEROS DIVISORES DE UN NUMERO CAPTURADO
 */

var numero = parseInt(prompt("Introduzca un número", 1));

while (isNaN(numero)) {
 alert("Favor introducir un numero");
 numero = parseInt(prompt("Introduce un número",1));
 //numero2 = parseInt(prompt("Introduce el segundo número",0));
}

for (let index = 1; index <= numero;index++) {
  if (numero%index ==0) {
      document.write("El numero: "+index+" es divisor de "+numero +"</BR>");
  }
}