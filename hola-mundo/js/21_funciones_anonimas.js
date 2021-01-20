'use script'

/**
 *      FUNCIONES ANONIMAS
 * Es una function sin nombre
 * CALLBACK
 * 
 */

/**
 * var pelicula = function (nombre) {
  return "La película es: " + nombre;
}
*/

function sumame(numero1,numero2,sumaYmuestra, sumaXdos) {
  var sumar = numero1 + numero2;
  sumaYmuestra(sumar);
  sumaXdos(sumar);
  return sumar;
}

/**
 * FUNCIONES DE CALLBACK
 * Se pasa la funcion anónima como argumento de otra funcion.
 * Dicha funcion anónima se puede invocar con el nombre del parametro de la function principal
 */
sumame(   5,7,
          function(dato){           //Esta es una function de callback
            console.log("La suma es: ", dato);
          },
          function(dato){
            console.log("la suma por 2 es: ", (dato*2))
            }
        );

/**
 * FUNCIONES DE FLECHA
 * SIMILAR A FUNCTION CALLBACK, PERO LA SINTAXIS ES LA SIGUIENTE
 * sumame(   5,7,
          dato ==> {           //Esta es una function de callback
            console.log("La suma es: ", dato);
          },
          (dato,dato2) ==> {
            console.log("la suma por 2 es: ", (dato*2))
            console.log("la multiplicacion por 2 es: ", (dato2*2))
            }
        );
 */