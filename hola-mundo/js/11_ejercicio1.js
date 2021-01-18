'use strict'

/**
 * PROGRAMA QUE PIDA DOS NUMEROS Y NOS DIGA CUAL ES MAYOR, EL MENOR Y/O SON IGUALES
 * Si los numeros no son numeros y/o los numeros sean negativos, volver a pedir
 */

 var numero1 = parseInt(prompt('Introduce el primer número', 0));
 var numero2 = parseInt(prompt('Introduce el segundo número', 0));

 console.log(numero1);
 console.log(numero2);

 //Permite aegurar que los datos introducidos sean los correctos.
 while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
  alert("Favor introducir números que sean positivos");
  numero1 = parseInt(prompt('Introduce el primer número', 0));
  numero2 = parseInt(prompt('Introduce el segundo número', 0));
 }


 if (numero1 > numero2) {
   document.write("El numero 1 "+numero1+" es mayor que "+numero2);   
 }
 else if (numero1 < numero2) {
    document.write("El numero 1 ("+numero2+") es mayor que "+numero1);   
    }
    else {if (numero1 == numero2)
      document.write("El numero 1 ("+numero1+") es igual al numero 2 ("+numero2+")");  
      else {
        alert("Favor introducir números");
      }
  }


