'use strict'

/**
 *        CREACION DE PLANTILLAS DE TEXTO
 * 
 *         `      ==> Inicio y fin de plantillas
 *        ${aaaa} ==> Variable dentro de plantillas 
 * 
*/

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

var texto = `
  <h1>Buenas tardes</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mis apellidos son: ${apellidos}</h3>
  `

  // var texto = "Mi nombre es "+nombre + "</BR>Mis apellidos son: " + apellidos;
document.write(texto);