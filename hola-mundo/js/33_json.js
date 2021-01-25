'use strict'

/**
 *    JSON ==> JS Object Notation
 * 
 *    aaa {x,y,z}   ==> objeto JSON a con elementos x,y,z
 *    a.x           ==> Devuelve valor de atributo x
 * 
 *    NOTA: MongoDB no almacena datos en tablas, sino que JSON
 * 
 */

 window.addEventListener('load',function(){
  // Declaracion de objeto JSON
  var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
  }

  var peliculas = [
    {titulo: 'pelicula1',year:2021,pais:'Chile'},
    pelicula
  ];

  console.log(peliculas);

  var caja_peliculas = document.querySelector('#peliculas');

  for (let index in peliculas) {
     var parafo = document.createElement('p');
     parafo.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
     document.querySelector('#peliculas').append(parafo);
   } 
 }
 )