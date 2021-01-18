'use strict'

/** 
 * USANDO UN BUCLE MOSTRAR LA MEDIA Y SUMA DE LOS NUMEROS INTRODUCIDOS
 * HASTA EL USUARIO QUE INTRODUZCA NUMERO NEGATIVO
 */

 var suma = 0;
 var contador = 0;

 do {
   var numero = parseInt(prompt('Introduce numero hasta que sea negativo',0));
   if (isNaN(numero)) {
     numero = 0;     
   }
   else if (numero >=0){
     suma += numero;
     contador ++;
   }
 } while (numero >= 0);

 document.write("El último numero introducido es "+numero+ "</BR>"); 
 document.write("Se hicieron "+contador + " intentos </BR>");
 document.write("La suma total es: "+suma+"</BR>");
 document.write("La media de todos los números es: "+(suma/contador));