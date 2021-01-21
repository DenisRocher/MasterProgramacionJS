'use strict'

/**
 *    BOM ==> Brother Object Model
 */

 // ALTURA ANCHO DEL BROWSER
 function getBOM (){
  // ancho y alto de la ventana HTML
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  // ancho y alto de la pantalla
  console.log(screen.width);
  console.log(screen.height);
  // URL
  console.log(window.location);
 }

 // Redireccion a otra URL
 function redirect(url) {
   window.location.href = url;
 }

 // Abrir nueva ventana PopUp con URL
 function abrirVentana(url) {
   window.open(url, "", 'width=400, height=300');   
 }