'use strict'

/**
 *      ARRAYS // ARREGLOS // MATRICES
 *  Colección de datos de distintos tipos en un única variable
 * 
 *      array[i]        ==> Extrae la variable de indice i
 *      .length         ==> Indica cantidad de elementos de un array
 *      .forEach(a,b,c) ==> Permite recorrer automaticamente 1 array
 *                      Por cada posicion del array, en "a" devuelve el valor
 *                      del elemento del array
 *             Nota: array.forEach(elemento) 
 *                   == array.forEach(elemento,index,array)
 *                      Se usa unicamente si queremos usar la posicion
 *       for (let a in array)
 *                      ==> Recorre todos los indices del array
 *   // BUSQUEDA DENTRO DE UN ARRAY
 *       .find(fun => var== "xx");
 *                      ==> Busca y devuelve contenido del array
 *                NOTA: undefined si no se encuentra
 *       .findIndex(nbr => var=='XX')
 *                      ==> Devuelve el indice del elemento del array buscado
 *                NOTA: -1 si no se encuentra
 *       .some(nbre => var>=iii);
 *                      ==> Devuelve True si hay valores >= iii

  *  */

 var nombre = "Denis Rocher";
 var nombres = ["Denis Rocher", "Valeska Valenzuela", "Francisco Rochito", 46, true];
 var lenguajes = new Array("php", "JS", "python", "Java","C#");
//                    indice 0      1       2        3
console.log(nombres);
console.log(lenguajes[2]);
console.log(lenguajes.length);

var posicion = parseInt(prompt("Indica posición en array para extraer",1));
console.log(posicion);
while (posicion < 1 || isNaN(posicion) || posicion > lenguajes.length) {
   //alert("favor ingresar indice inferior o igual a: "+lenguajes.length);
   posicion = parseInt(prompt("Indica posición en array para extraer inferior a: "+(lenguajes.length+1),1));
   console.log(posicion);
}
var resultado = lenguajes[(posicion-1)];
console.log(resultado);

document.write("<h1>Lenguajes de programacion del 2008</h1>");
document.write("<ul>");

/**
for (let index = 0; index < lenguajes.length; index++) {
   const element = lenguajes[index];
   document.write("<li>"+element+"</li>");
}
*/

lenguajes.forEach((elemento, index, array) => {
   document.write("<li>"+elemento+"</li>");
})
document.write("</ul>");

document.write("<ul>");
for (let lenguaje in lenguajes) {
   document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

// BUSQUEDAS DENTRO DE ARRAY
var busqueda = lenguajes.find(lenguaje=>{
   return lenguaje == "python";
});
console.log(busqueda);

// BUSQUEDAS DENTRO DE ARRAY
var busqueda2 = lenguajes.find(lenguaje=>lenguaje == "python");
console.log(busqueda2);

// BUSQUEDAS INDICE DENTRO DE ARRAY
busqueda2 = lenguajes.findIndex(lenguaje=>lenguaje == "python2");
console.log(busqueda2);

// BUSQUEDA NUMEROS
var precios = [10,20,30,56,89];
busqueda2 = precios.some(precio => precio>=20);
console.log(busqueda2);
