'use strict'

/*****************************************************************
 *            METODOS PARA TRANSFORMACION DE TEXTOS
 * ***************************************************************
 * 
 * 1      .toString()       ==> Transforma numero a String
 * 2      .toUpperCase()    ==> Transforma a MAYUSCULAS
 * 3      .toLowerCase()    ==> Transforma a MINUSCULAS
 * 4      .length           ==> numero de caracteres (validar si tiene o no info)
 *                          ==> Numero de elementos de un array
 * 5      +                 ==> Concatenar
 * 6      .concat()         ==> Concatenar (se puede usar en bucles por ej)
 * 7      .indexOf()        ==> Búsqueda, devvuelve la posicion inicial de bus *        .lastIndexOf()    ==> Devuelve la última posicion donde aparece
 * 8      .search()         ==> idem indexOf()
 *                Nota: Devuelve -1 si no existe
 * 9      .match()          ==> Devuelve array con resultado busqueda.
 *                Nota: Al poner /xxx/gi (es una expresion regualar) realiza 
 *                      busqueda global de todas las coincidencias y devuelve
 *                      array con todos los resultados encontrados.
 * 10     .substr(a,b)      ==> Devuelve cadena desde posición a, largo b
 * 11     .charAt(a)        ==> Devuelve la letra en posición a
 * 12     .startWith(XX)    ==> Busca al inicio una cadena XX, devuelve boolean.
 *                Nota: Diferencia May y Min
 * 13     .endsWith(XX)     ==> Idem pero al final de la cadena.
 * 14     .includes(XX)     ==> Busca si está o no uan cadena
 * 15     .replace(X,Y)     ==> Reemplaza texto X por Y
 * 16     .slice(a)         ==> Devuelve string desde la posicion a hasta fin
 *        .slice(a,b)       ==> Devuelve string desde posicion a hasta pos: b
 * 17     .split(x)         ==> Devuelve texto en un array
 *                Nota: Si por ejemplo X=" ", separa la frase en palabras
 * 18      .trim()         ==> Elimina espacios a inicio y final
 */

 var numero = 444;
 var texto1 = "Curso de JS JS2";
 var texto2 = "De 0 a experto";

// NUMERO TO STRING
 var dato = numero.toString();
 console.log(typeof dato);

// TEXTO DE MIN A MAYUSCULAS -- minusculas
 dato = texto1.toUpperCase();
 console.log(dato);
 dato = texto1.toLowerCase();
 console.log(dato);

// LONGITUD TEXTO
var nombre = "";
console.log(nombre.length);
console.log(texto1.length);

// ELEMENTOS DE ARRAY
var textoarray = ["hola1", "hola2"];
console.log(textoarray);
console.log(textoarray.length + " Elementos en la lista");

// CONCATENAR TEXTOS
var textototal = texto1.concat(" "+texto2);
console.log(textototal);

// BUSQUEDA DE TEXTO
var busqueda = texto1.indexOf("JS");
console.log("Metodo indexOf: " + busqueda);

busqueda = texto1.lastIndexOf("JS");
console.log("Metodo lastIndexOf: "+busqueda);

busqueda = texto1.search("JS");
console.log("Metodo search: "+ busqueda);

busqueda = texto1.match("JS");
console.log(busqueda);

busqueda = texto1.match(/JS/gi);  //Expresion regular para hacer búsqueda global
console.log(busqueda);

// substr
var extrae = texto1.substr(4,56);
console.log("Resultado substr: " + extrae);

busqueda = texto1.startsWith("Curso");
console.log(busqueda);

busqueda = texto1.includes("JS");
console.log(busqueda);


busqueda = texto1.slice(6,10);
console.log("Resultado slice desde pos 6: " + busqueda);

busqueda = texto1.split(" ");
console.log(busqueda);

// Funciones de REEMPLAZO
busqueda = texto1.replace("JS","JavaScript");
console.log("Resultado replace JS por JavaScript: " + busqueda);

//busqueda = texto1.trim();





