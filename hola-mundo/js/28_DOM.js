'use strict'

/**
 *    DOM - Document Object Model
 * 
 *    .getElementById()   ==> Devuelve el elemento completo del documento
 *    +.innerHTML         ==> Devuelve contenido del elemento
 * 
 * En Css, las nomenclaturas son las siguientes ==> Devuelve NodeList con todas
 * las coincidencias
 *     document.querySelector('#aaaa');
 *        aaaa    ==> Selectiona elementos con el nombre de etiqueta 'aaaa'
 *        #aaaa   ==> Elementos con id 'aaaa'
 *        .aaaa   ==> Elementos con clase 'aaaa'
 * 
 *    https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
 *     document.querySelector('#aaaa');
 *        aaaa    ==> Selectiona elementos con el nombre de etiqueta 'aaaa'
 *        #aaaa   ==> Elementos con id 'aaaa'
 *        .aaaa   ==> Elementos con clase 'aaaa'
 * 
 *    .
 */


 function cambiaColor(objeto, color) {
   objeto.style.background = color;
 }

 // Selección de elementos de la página, CON ID CONCRETO
 //var caja = document.getElementById('micaja');
 var caja = document.querySelector('#micaja');
 caja.innerHTML = 'Nuevo contenido del DIV desde JS';

 // Cambios estilos CSS HTML
 //caja.style.background = 'red';
 caja.style.padding = '20px';
 caja.style.color = 'white';
 caja.className = 'hola';
 console.log(caja);

 // CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todoslosDivs = document.getElementsByTagName('DIV');
console.log(todoslosDivs);

/** 
var divSegundo = todoslosDivs[2];
console.log(divSegundo);
divSegundo.innerHTML = 'Nuevo texto del segundo DIV';
*/

var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');
var br = document.createElement('br');
var span = document.createElement('span');

seccion.append(hr);

for (let valor in todoslosDivs) {
  if (typeof todoslosDivs[valor].textContent == 'string') {
    var parafo = document.createElement('p');
    var texto = document.createTextNode(todoslosDivs[valor].textContent);
    parafo.append(texto);
    document.querySelector('#miseccion').append(parafo);
  }
 }  

 // CONSEGUIR ELEMENTOS POR SU CLASE
 var divsColor = document.getElementsByClassName('red');
 var numElementos = divsColor.length;
 console.log(divsColor);
 console.log(numElementos);

 for (let valor in divsColor) {
  if (typeof divsColor[valor].textContent == 'string') {
    divsColor[valor].style.background = 'red';
  }
 }  

 // QuerySelector (solo devuelve 1 elemento)
 var id = document.querySelector('#encabezado');
 console.log(id);


 // QuerySelectorAll (Devuelve NodeList con todos los elementos de la clave)
 var queryAll = document.querySelectorAll('.red');
 console.log(queryAll);


 // QuerySelectorAll (Devuelve NodeList con todos los elementos de la clave)
 // https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
 queryAll = document.querySelectorAll('div');
 console.log(queryAll);
