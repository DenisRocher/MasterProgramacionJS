'use strict'


/** 
 *    LOCAL STORAGE ==> PERMITE HACER QUE LA INFORMACIÒN SEA PERSITENTE DURANTE
 *                      LA NAVEGACIÓN (SESION)
 *        NOTA: EXISTE 1 STORAGE POR DOMINIO
 * 
 * 
 *        PROYECTO MINSTACK
 * 
 */
 window.addEventListener('load',function(){
    // COMPROBAR SIEMPRE LA COMPATIBILIDAD DE LOS NAVEGADORES
    if (typeof(Storage) != 'undefined') {
        console.log('LocalStorage compatible con navegador');
    } else {
      console.log('Version navegador incompatible');
    }

    // GUARDAR DATOS EN LocalStorage
    localStorage.setItem('Titulo','Master en programación Udemy');

    // RECUPERAR ELEMENTO
    console.log(localStorage.getItem('Titulo'));
    //var parafo = document.createElement('p');
    //parafo.append(localStorage.getItem('Titulo'));
    //document.querySelector('#localStorage').append(parafo);
    document.querySelector('#localStorage').innerHTML = localStorage.getItem('Titulo');

    // GUARDAR OBJETOS EN LOCALSTORAGE
    var usuario = {
      nombre : 'Denis Rocher',
      email : 'denis.rocher@gmail.com',
      web : 'https://github.com/DenisRocher'
    }

    // ES NECESARIO CONVERTIR LOS OBJETOS A STRING PARA PODER GUARDARLOS Y/O ENVIARLOS POR API, SUBMIT, ETC.
    localStorage.setItem('usuario',JSON.stringify(usuario));

    // RECUPERAR OBJETO DEL STORAGE
    var user = JSON.parse(localStorage.getItem('usuario'))
    console.log(user);
    document.querySelector('#localStorage').append(' ' +user.web+' - '+user.nombre);

    // LIMPIAR LOCALSTORGE
    localStorage.removeItem('usuario');
    //localStorage.clear;
 }
 )

  



