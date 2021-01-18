'use script'

/**
 * CREA UNA CALCULADORA
 * 1. PIDA 2 NUMEROS POR PANTALLA
 * 2. VALIDA LOS NUMEROS
 * 3. MUESTRA EN LA PÁGINA, EN UNA ALERTA Y EN LA CONSOLA EL RESULTADO DE + x - /
 * 
 */

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
 alert("Favor introducir un segundo numero mayor al primero")
 numero1 = parseInt(prompt("Introduce el primer número",0));
 numero2 = parseInt(prompt("Introduce el segundo número",0));
}

var resultado = "La suma es: "+ (numero1+numero2) + "<BR/>" +
                "La resta es: "+ (numero1-numero2) + "<BR/>" +
                "La multiplicación es: "+ (numero1*numero2) + "<BR/>" +
                "El producto es: "+ (numero1/numero2) + "<BR/>";
var resultado2 = "La suma es: "+ (numero1+numero2) + "\n" +
                "La resta es: "+ (numero1-numero2) + "\n" +
                "La multiplicación es: "+ (numero1*numero2) + "\n" +
                "El producto es: "+ (numero1/numero2) + "\n";
document.write(resultado);
alert(resultado2);
console.log(resultado2);
