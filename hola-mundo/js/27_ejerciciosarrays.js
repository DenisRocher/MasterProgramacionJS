'use strict'

/**
 *    PROGRAMA QUE HAGA
 * 1. PEDIR 6 NUMEROS POR PANTALL
 * 2. INGRESARLO A UN ARRAY
 * 3. MOSTRAR TODOS LOS ELEMENTOS DEL ARRAY EN EL CUERPO DE PAGINA Y CONSOLA
 * 4. ORDENAR LA MATRIZ Y MOSTRARLO
 * 5. INVERTIR EL ORDEN Y MOSTRARLO
 * 6. MOSTRAR CUANTOS ELEMENTOS TIENE
 * 7. BUSCQUEDA DE VALOR INTRODUCIDO POR EL USUARIO, INDICAR SI LO 
 * ENCUENTRA Y SU INDICE
 * 
 */
 var numeroiter = 6;
 var arraynumeros = [];

 // function para capturar numeros
 function capturanumer(iteracion) {
  var captura =  parseInt(prompt("Favor introducir el número "+iteracion+"/"+numeroiter,0));
  return captura;
 }

 // Funcion para presentar resultado en la página
 function mostrarArrayHTML(objeto, textoCustom = '') {
    document.write('<h2>Contenido del Array '+textoCustom+'</h2>');
    document.write('<ul>'); 
    /** for (let indexArray in objeto) {
      document.write('<li>'+objeto[indexArray]+'</li>');
    }
    */
    objeto.forEach((elemento) => {
      document.write("<li>"+elemento+"</li>");
    })
    document.write('</ul>');
    document.write('</BR>')
 }

  document.write('<h1>Ejercicio con Array</h1>');

 //1+2 Captura de numeros del array y validación formato
 for (let index = 1; index <= numeroiter; index++) {
    let elemento = capturanumer(index);
    while (isNaN(elemento)) {
      elemento = capturanumer(index);
    }
    arraynumeros.push(elemento);   
 }

 //3. Mostrar array
 mostrarArrayHTML(arraynumeros);
 console.log(arraynumeros);

 //4. Ordenar array
 arraynumeros.sort(function(a, b){return a - b});
 mostrarArrayHTML(arraynumeros, 'Ordenado');
 console.log(arraynumeros);

 //5. Orden inverso array
 arraynumeros.sort(function(a, b){return b - a});
 mostrarArrayHTML(arraynumeros,'Orden inversa');
 console.log(arraynumeros);

 //6. Mostrar length del array
 document.write('<h2>Número de elementos del array</h2>');
 document.write(arraynumeros.length);

 //7. Pedir numero a usuario, y buscar en array informando si está
 document.write('<h2>Busqueda de número en array</h2>')
 var numbuscar = parseInt(prompt("Favor indicar el número que quiere buscar:",0));
 var posicion = arraynumeros.findIndex(numero => numero == numbuscar);
 
 if (posicion && posicion != -1) {
   document.write('El numero buscado '+numbuscar+' se encuentra en posición '+ posicion);
 } else {
   alert('El numero no se encuentra en el array');
 }
 