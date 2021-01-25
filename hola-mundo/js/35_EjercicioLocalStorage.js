'use strict'


/** 
 *    EJERCICIO LOCAL STORAGE
 *  1. FORMULARIO PARA AÑADIR PELÍCULAS
 *  2. 
 * 
 */
 window.addEventListener('load',function(){
  
  var formulario = document.querySelector('#formAddPelicula');
  var formularioBorrar = document.querySelector('#formBorrarPelicula');


  formulario.addEventListener('submit', function(){
    var tituloAdd = document.querySelector('#addpelicula').value;
    if (tituloAdd.length <=0){
      alert('Favor ingresar título nuevo.')
    }
    else{
      localStorage.setItem(tituloAdd,tituloAdd);
    }
  })

  formularioBorrar.addEventListener('submit', function(){
    var tituloBorrar = document.querySelector('#borraPelicula').value;
    console.log(localStorage.getItem(tituloBorrar));
    if (tituloBorrar.length <=0 || localStorage.getItem(tituloBorrar) == null){
      alert('Favor ingresar título existente para borrar.')
    }
    else{
      localStorage.removeItem(tituloBorrar);
    }
  })
  
  var ul = document.querySelector('#listPeliculas');
  var contador = 1;

  for (let index in localStorage) {
    var element = localStorage[index];
    console.log(element);
    if (typeof localStorage[index] == 'string'){
     var li = document.createElement('li');
     li.append('Titulo '+contador+': '+element);
     contador++;
      ul.append(li);
    }
   }
 }
 )