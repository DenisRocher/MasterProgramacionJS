'use strict'

// OPERADORES

/**********************************************
+ Suma o concatena
- Resta
* Multiplica
/ Divide
% resto de la division entre dos numeros
*********************************************/

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 % numero2;

alert("el resultado de la operacion es: "+operacion);

// TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola 'que' tal";
console.log(cadena_texto);
var verdadero_o_falso = true; // false Booleano
console.log(verdadero_o_falso);

// CONVERSION DE DATOS
var numero_falso = "33.45";
console.log(Number(numero_falso)+7); // Convertir a numero
console.log(parseInt(numero_falso));
console.log(parseFloat(numero_falso));

var numero_entero = 44;
console.log(numero_entero+7); // Convertir a numero
console.log(numero_entero+' Texto Concatenado'); // Convertir a numero
console.log(String(numero_entero)+4);

// DETECTAR EL TIPO DE DATO DE UNA VARIABLE
console.log('numero_entero es: '+ typeof numero_entero);
console.log('cadena_texto es: ' + typeof cadena_texto);
console.log('verdadero_o_falso es: ' + typeof verdadero_o_falso);
console.log('numero_falso es: ' + typeof numero_falso);



