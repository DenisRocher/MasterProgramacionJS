'use strict'

/**
 *              FUNCIONES
 *  function name (param) {
 *    return XXXX  
 *    }
 */

 function porConsola(numero1, numero2){
    var resultado = "La suma es: "+ (numero1+numero2) + "\n" +
                "La resta es: "+ (numero1-numero2) + "\n" +
                "La multiplicación es: "+ (numero1*numero2) + "\n" +
                "El producto es: "+ (numero1/numero2) + "\n";
     
    console.log(resultado);
 }

 function porPantalla(numero1, numero2) {
    var resultado = "La suma es: "+ (numero1+numero2) + "<BR/>" +
                    "La resta es: "+ (numero1-numero2) + "<BR/>" +
                    "La multiplicación es: "+ (numero1*numero2) + "<BR/>" +
                    "El producto es: "+ (numero1/numero2) + "<BR/>";
    document.write(resultado);
 }

function calculadora(var1, var2, mostrar = false) {
  console.log("Hola soy la calculadora");
  //console.log(mostrar);
  //return "Hola soy la calculadora";

  if (mostrar == true) {
    porPantalla(var1, var2);
  }
  else {
    porConsola(var1,var2);
  }
}

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
  alert("Favor introducir un segundo numero mayor al primero")
  numero1 = parseInt(prompt("Introduce el primer número",0));
  numero2 = parseInt(prompt("Introduce el segundo número",0));
}
//var resultado_funcion = calculadora(numero1, numero2);
var resultado_full = calculadora(numero1, numero2, true);
//alert(resultado_funcion);
//var resultado = calculadora();