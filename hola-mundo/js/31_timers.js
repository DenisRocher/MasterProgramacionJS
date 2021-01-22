'use strict'

 window.addEventListener('load', () =>{


  /**
   *      TIMERS
   * 
   *    setInterval(a,XXX) ==> Ejecuta 'a' cada XXX segundos (continuamente)
   *    setTimeOut(a,XXX)  ==> Ejecuta 'a' a los XXX segundos (solo 1 vez)
   *    
   */

    // setInterval(a,XXX) ==> Ejecuta 'a' cada XXX milisegundos
        var tiempoTimeOut = setTimeout(function(){
      console.log("setTimeout ejecutado");
      var encabezado = document.querySelector("h1");
       if (encabezado.style.fontSize == "50px"){
         encabezado.style.fontSize = "20px";
       } else {
         encabezado.style.fontSize = "50px"
       }
    },500);

    function intevalo(){
      var tiempoInterval = setInterval(function(){
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px"){
          encabezado.style.fontSize = "20px";
        } else {
          encabezado.style.fontSize = "50px"
        }
      },3000);
      return tiempoInterval;
    }

    var tiempo = intevalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', function(){
      console.log('Se para el parpadeo');
      clearInterval(tiempo);
    })
    var start = document.querySelector('#start');
    start.addEventListener('click', function(){
      console.log('Se inicia el parpadeo');
      intevalo();
    })

  }
 )
