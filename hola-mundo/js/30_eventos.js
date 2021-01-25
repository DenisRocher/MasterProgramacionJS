'use strict'

/**
 * 
 *      EVENTOS DEL MOUSE
 *      
 *      'click'
 *      'dblclick'
 *      'mouseover'
 *      'mouseout'
 *      'focus'
 *      'blur'
 *      'keydown'
 *      'keypress'
 *      'keyup'
 */

 window.addEventListener('load', () =>{
      function cambiarColorBoton(color) {
        boton.style.background = color;
      }

      function cambiarColorRandom(elemento){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        //idElemento = "#"+idElemento;
        //console.log(idElemento);
        //var elemento = document.querySelector(idElemento)
        //var elemento = idElemento;
        //console.log(elemento);
        elemento.style.background = color;
        elemento.style.border = "2px solid #ccc";
        //return color;
      }

      var boton = document.querySelector('#boton');
      
      // EVENTO CLICK 'click' 'dblclick'
      boton.addEventListener('click',function(){
        cambiarColorRandom(this);
       // this.style.border ='10px solid black';
        });

      // EVENTO MOUSEOVER
        boton.addEventListener('mouseover',function(){
        this.style.background = 'yellow'
      })

      // EVENTO MOUSEOUT
      boton.addEventListener('mouseout',function(){
        this.style.background = '#ccc'
      })

      var inputNbre = document.querySelector('#campo_nbre');
        
      // EVENTO FOCUS
      inputNbre.addEventListener('focus', function(){
        console.log('[focus] Estas en el input');
      })

      // EVENTO BLUR
      inputNbre.addEventListener('blur', function(){
        console.log('[blur] Estas fuera del input');
      })

      // EVENTO KEYDOWN
      inputNbre.addEventListener('keydown', function(event){
        console.log("[keydown] Pulsaste esta tecla " + event.key);
      });

      // EVENTO KEYPRESS
      // inputNbre.addEventListener('keypress', function(event){
      //  console.log("[keypress] Tecla presionada " + event.key);
      //});
      // EVENTO KEYUP
      inputNbre.addEventListener('keyup', function(event){
        console.log("[keyup] Tecla soltada " + event.key);
      });
 }) // end load
 
