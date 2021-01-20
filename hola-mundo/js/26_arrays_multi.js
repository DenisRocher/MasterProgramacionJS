'use strict'

/**
 *  ARRAYS MULTIDIMENSIONALES
 * 
 * Son array dentro de otros array
 *    .push(a)      ==> Añade 1 elemento al array
 *    .pop()        ==> Elimina el último elemento del array
 *    .splice(i,l)  ==> Elimina 'l' elementos desde elemento en posicion 'i'
 *    .join()       ==> Convierte array a String
 *    .split(a)     ==> Convierte un Str en Array, en cada separador 'a'
 *    .sort()       ==> Orden array por orden alfabetico por defecto
 *        NOTA
 *            .sort(function(a, b){return a - b}) ==> Ordena numeros
 *           .sort(function(a, b){return b - a}); ==> numeros mayor a menor
 *    .reverse()    ==> Invierte el array
 *           NOTA
 */

 var categorias = ['Acción', 'Terror', 'Comedia'];
 var peliculas = ['Pelicula1', 'Pelicula2', 'Pelicula3','Pelicula4'];
 var cine = [categorias, peliculas];
 console.log(cine);
 console.log(cine[0][1]);
 console.log(cine[1][2]);

 var nueva_pelicula = prompt("Introduce tu pelicula favorita");
 // Añade elemento al array
 peliculas.push(nueva_pelicula);
 console.log(peliculas);
 // Elimina ÚLTIMO ELEMENTO del array
 peliculas.pop();
 console.log(peliculas);
// Eliminar elemento concreto del array
var indice = peliculas.indexOf('Pelicula2');
console.log(indice);
if(indice > -1){
  peliculas.splice(indice,1);
}
console.log(peliculas);
// Convertir array a texto
var peliculasStr = peliculas.join();
console.log(peliculasStr);

// Convertir String a Array
var textoArray = "texto1, texto2, texto3";
var arraytexto = textoArray.split();
console.log(arraytexto);

textoArray = "texto4 texto5 texto6";
arraytexto = textoArray.split(' ');
console.log(arraytexto);

// Cambiar orden de elementos de array
peliculas = ['Pelicula5', 'Pelicula2', 'Pelicula1','Pelicula4'];
console.log(peliculas);
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);

// Ordenar numericos (por defecto lo considera como Str)
peliculas = [40, 100, 1, 5, 25, 10];
peliculas.sort(function(a, b){return a - b});
console.log(peliculas);
peliculas.sort(function(a, b){return b - a});
console.log(peliculas);

